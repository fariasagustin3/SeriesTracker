import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable, Image, Button } from 'react-native';
import Card from '../components/Card';
import EditModal from '../components/EditModal';
import AddModal from '../components/AddModal';

const HomeScreen = () => {
  const [activeSeries, setActiveSeries] = useState([]);
  const [inactiveSeries, setInactiveSeries] = useState([]);
  const [addSerieModal, setAddSerieModal] = useState(false);
  const [editSerieModal, setEditSerieModal] = useState(false);

  // useEffect(() => {
  //   const getActiveSeries = async() => {
  //     try {
  //       const res = await axios.get('https://series-tracker.onrender.com/series/active/list');
  //       setActiveSeries(res.data);
  //     } catch(err) {
  //       console.log(err);
  //     }
  //   };

  //   const getInactiveSeries = async () => {
  //     try {
  //       const res = await axios.get("https://series-tracker.onrender.com/series/inactive/list");
  //       setInactiveSeries(res.data);
  //     } catch(err) {
  //       console.log(err);
  //     }
  //   };

  //   getActiveSeries();
  //   getInactiveSeries();
  // })

  const handleEditModal = (id) => {
    setEditSerieModal(true);
  }

  const closeEditModal = () => {
    setEditSerieModal(false);
  }

  const closeAddModal = () => {
    setAddSerieModal(false);
  }

  return (
    <View style={styles.container}>
      <View style={{ gap: 10 }}>
        <Text style={styles.activeSeriesTitle}>Siguiendo</Text>
        <ScrollView horizontal>
          <View style={styles.activeSeriesContainer}>
            <Pressable onPress={() => handleEditModal(1)}>
              <Card status="Activo" />
            </Pressable>
            <Pressable onPress={() => handleEditModal(2)}>
              <Card status="Activo" />
            </Pressable>
            <Pressable onPress={() => handleEditModal(3)}>
              <Card status="Activo" />
            </Pressable>
            <Pressable onPress={() => handleEditModal(4)}>
              <Card status="Activo" />
            </Pressable>
            <Pressable onPress={() => handleEditModal(5)}>
              <Card status="Activo" />
            </Pressable>
          </View>
        </ScrollView>

        <Text style={styles.activeSeriesTitle}>Finalizado</Text>
        <ScrollView horizontal>
          <View style={styles.activeSeriesContainer}>
            <Pressable onPress={() => handleEditModal(1)}>
              <Card status="Finalizado" />
            </Pressable>
            <Pressable onPress={() => handleEditModal(2)}>
              <Card status="Finalizado" />
            </Pressable>
            <Pressable onPress={() => handleEditModal(3)}>
              <Card status="Finalizado" />
            </Pressable>
            <Pressable onPress={() => handleEditModal(4)}>
              <Card status="Finalizado" />
            </Pressable>
            <Pressable onPress={() => handleEditModal(5)}>
              <Card status="Finalizado" />
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <View>
        <Button title="Añadir serie" onPress={() => setAddSerieModal(true)} />
      </View>
      <EditModal isVisible={editSerieModal} closeEditModal={closeEditModal} />
      <AddModal isVisible={addSerieModal} closeAddModal={closeAddModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    flex: 1,
    backgroundColor: '#EEE5FF',
    justifyContent: 'space-between',
  },
  activeSeriesContainer: {
    flexDirection: 'row',
    gap: 20
  },
  activeSeriesTitle: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold'
  },
})

export default HomeScreen;

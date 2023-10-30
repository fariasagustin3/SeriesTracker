import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable, Image, Button } from 'react-native';
import Card from '../components/Card';

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

  return (
    <View style={styles.container}>
      <View style={{ gap: 10 }}>
        <Text style={styles.activeSeriesTitle}>Siguiendo</Text>
        <ScrollView horizontal>
          <View style={styles.activeSeriesContainer}>
            <Card status="Activo" />
            <Card status="Activo" />
            <Card status="Activo" />
            <Card status="Activo" />
            <Card status="Activo" />
          </View>
        </ScrollView>

        <Text style={styles.activeSeriesTitle}>Finalizado</Text>
        <ScrollView horizontal>
          <View style={styles.activeSeriesContainer}>
            <Card status="Finalizado" />
            <Card status="Finalizado" />
            <Card status="Finalizado" />
            <Card status="Finalizado" />
            <Card status="Finalizado" />
          </View>
        </ScrollView>
      </View>
      <View>
        <Button title="Añadir serie" onPress={() => setAddSerieModal(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    flex: 1,
    backgroundColor: '#FFF',
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

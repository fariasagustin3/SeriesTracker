import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable, Image, Button } from 'react-native';
import Card from '../components/Card';
import EditModal from '../components/EditModal';
import AddModal from '../components/AddModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getSerie = async(id, setSerie) => {
  try {
    const res = await axios.get(`https://series-tracker.onrender.com/series/${id}/serie`);
    const serieData = JSON.stringify(res.data);
    await AsyncStorage.setItem("serie", serieData);
    return res.data;
  } catch(err) {
    console.log(err);
  }
}

const HomeScreen = () => {
  const [activeSeries, setActiveSeries] = useState([]);
  const [inactiveSeries, setInactiveSeries] = useState([]);
  const [addSerieModal, setAddSerieModal] = useState(false);
  const [editSerieModal, setEditSerieModal] = useState(false);

  useEffect(() => {
    const getActiveSeries = async () => {
      try {
        const res = await axios.get('https://series-tracker.onrender.com/series/active/list');
        setActiveSeries(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getInactiveSeries = async () => {
      try {
        const res = await axios.get("https://series-tracker.onrender.com/series/inactive/list");
        setInactiveSeries(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getActiveSeries();
    getInactiveSeries();
  }, [activeSeries, inactiveSeries])


  const handleEditModal = (id) => {
    setEditSerieModal(true);
    getSerie(id)
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
            {activeSeries ? activeSeries.map((serie) => (
              <Pressable key={serie.id} onPress={() => handleEditModal(serie.id)}>
                <Card
                  season={serie.season}
                  chapter={serie.chapter}
                  poster={serie.poster}
                  title={serie.title}
                  status={serie.status}
                />
              </Pressable>
            )) : (
              <Text>NO SERIES</Text>
            )}
          </View>
        </ScrollView>

        <Text style={styles.activeSeriesTitle}>Finalizado</Text>
        <ScrollView horizontal>
          <View style={styles.activeSeriesContainer}>
            {inactiveSeries ? inactiveSeries.map((serie) => (
              <Pressable key={serie.id} onPress={() => handleEditModal(serie.id)}>
                <Card
                  season={serie.season}
                  chapter={serie.chapter}
                  poster={serie.poster}
                  title={serie.title}
                  status={serie.status}
                />
              </Pressable>
            )) : (
              <Text>NO SERIES</Text>
            )}
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

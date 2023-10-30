import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Card from './Card';
import axios from 'axios';

const SeriesList = ({ active, inactive }) => {
  const [activeSeries, setActiveSeries] = useState([]);
  const [inactiveSeries, setInactiveSeries] = useState([]);

  useEffect(() => {
    const getAllSeries = async () => {
      const seriesActive = await axios.get('https://series-tracker.onrender.com/series/active/list');
      const seriesInactive = await axios.get('https://series-tracker.onrender.com/series/inactive/list');
      setActiveSeries(seriesActive);
      setInactiveSeries(seriesInactive);

    }

    getAllSeries();
  })

  return (
    <View>
      {(active && activeSeries) && activeSeries?.map((s) => (
        <Card
          key={s.id}
          image={s.poster}
          title={s.title}
          currentSeason={s.currentSeason}
          currentChapter={s.currentChapter}
          status={s.status}
        />
      ))}
      {(inactive && inactiveSeries) && inactiveSeries?.map((s) => (
        <Card
          key={s.id}
          image={s.poster}
          title={s.title}
          currentSeason={s.currentSeason}
          currentChapter={s.currentChapter}
          status={s.status}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({})

export default SeriesList;

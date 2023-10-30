import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Card = ({ image, title, seasons, currentSeason, currentChapter, status }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={{ width: 150, height: 200, borderRadius: 5 }}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={status === "Activo" ? styles.activeStatus : styles.inactiveSatus}>{status}</Text>
      <Text>Temporada: {currentSeason}</Text>
      <Text>Capitulo: {currentChapter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    width: 140, 
    textAlign: 'center'
  },
  activeStatus: {

  },
  inactiveSatus: {

  }
})

export default Card;

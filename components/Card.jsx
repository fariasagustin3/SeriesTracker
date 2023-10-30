import React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';

const Card = ({ poster, title, status, season, chapter }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: "https://via.placeholder.com/600/771796" }}
        style={styles.poster}
      />
      <Text style={styles.title}>The Walking Dead</Text>
      <Text style={status === "Activo" ? styles.activeStatus : styles.inactiveStatus}>{ status }</Text>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btn}>T 1</Text>
        </Pressable>
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btn}>C 1</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    gap: 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    width: 180,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15
  },
  poster: {
    width: 130,
    height: 180,
    borderRadius: 10,
    alignSelf: 'center'
  },
  title: {
    width: 120,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    color: '#000',
    fontWeight: '600',
    alignSelf: 'center'
  },
  activeStatus: {
    backgroundColor: '#00A86B',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#FFF',
    fontSize: 16,
    textAlign: 'left'
  },
  inactiveStatus: {
    backgroundColor: '#FD3C4A',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#FFF',
    fontSize: 16,
    textAlign: 'left'
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: 120,
    marginTop: 5,
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  btnContainer: {
    backgroundColor: '#000',
    width: 40,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  btn: {
    color: '#FFF',
    fontSize: 15,
  fontWeight: '600'
  },
})

export default Card;

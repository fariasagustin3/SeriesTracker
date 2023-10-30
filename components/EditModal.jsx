import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, Pressable, Button } from 'react-native';
import Modal from "react-native-modal";
import ArrowLeft from '../assets/arrow-left.png'
import ArrowRight from '../assets/arrow-right.png'

const EditModal = ({ isVisible, closeEditModal }) => {
  const [status, setStatus] = useState("");
  const [season, setSeason] = useState("1");
  const [chapter, setChapter] = useState("1");

  const editSerie = async (id) => {
    try {
      console.log({ status: status, season: parseInt(season), chapter: parseInt(chapter) })
      setStatus("");
      setSeason("1");
      setChapter("1");
      closeEditModal();
    } catch(err) {
      console.log(err);
    }
  };

  const deleteSerie = async (id) => {
    try {
      console.log("Deleted")
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <View>
      <Modal isVisible={isVisible} animationIn="zoomIn" animationOut="zoomOut" style={{ alignSelf: 'center' }}>
        <View style={styles.container}>
          <Text style={styles.title}>Estado</Text>
          <TextInput
            placeholder="Elegi entre 'Activo' o 'Finalizado'"
            value={status}
            onChangeText={setStatus}
            style={styles.textInput}
          />
          <Text style={styles.title}>Temporada</Text>
          <View style={styles.inputContainer}>
            <Pressable onPress={() => setSeason(`${parseInt(season) - 1}`)}>
              <Image source={ArrowLeft} style={styles.arrowLeft} />
            </Pressable>
            <TextInput
              value={season}
              onChangeText={setSeason}
              keyboardType='numeric'
              style={styles.buttonInput}
              editable={false}
            />
            <Pressable onPress={() => setSeason(`${parseInt(season) + 1}`)}>
              <Image source={ArrowRight} style={styles.arrowRight} />
            </Pressable>
          </View>
          <Text style={styles.title}>Capitulo</Text>
          <View style={styles.inputContainer}>
            <Pressable onPress={() => setChapter(`${parseInt(chapter) - 1}`)}>
              <Image source={ArrowLeft} style={styles.arrowLeft} />
            </Pressable>
            <TextInput
              value={chapter}
              onChangeText={setChapter}
              keyboardType='numeric'
              style={styles.buttonInput}
            />
            <Pressable onPress={() => setChapter(`${parseInt(chapter) + 1}`)}>
              <Image source={ArrowRight} style={styles.arrowRight} />
            </Pressable>
          </View>
        <Button title='Editar' onPress={editSerie} />
        <Button title='Eliminar' onPress={deleteSerie} color="#FD3C4A" />
        <Button title='Cancelar' onPress={closeEditModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 500,
    backgroundColor: '#FFF',
    borderRadius: 15,
    justifyContent: 'center',
    gap: 10
  },
  title: {
    color: '#000',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    color: '#000',
    fontSize: 16,
    borderRadius: 10,
    marginTop: 10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    justifyContent: 'center'
  },
  arrowLeft: {
    width: 50,
    height: 50,
  },
  arrowRight: {
    width: 50,
    height: 50,
  },
  buttonInput: {
    textAlign: 'center',
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 10,
    color: '#FFF',
    fontSize: 18
  }
})

export default EditModal;

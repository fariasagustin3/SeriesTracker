import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, Pressable, Button, ActivityIndicator } from 'react-native';
import Modal from "react-native-modal";
import ArrowLeft from '../assets/arrow-left.png'
import ArrowRight from '../assets/arrow-right.png'
import axios from 'axios';

const AddModal = ({ isVisible, closeAddModal }) => {
  const [status, setStatus] = useState("");
  const [season, setSeason] = useState("1");
  const [chapter, setChapter] = useState("1");
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [loading, setLoading] = useState(false);

  const addSerie = async (id) => {
    try {
      const res = await axios.post(`https://series-tracker.onrender.com/series/create`, {
        status: status,
        season: parseInt(season),
        chapter: parseInt(chapter),
        title: title,
        poster: poster,
      });
      console.log("Created")
      setStatus("");
      setSeason("1");
      setChapter("1");
      setTitle("");
      setPoster("");
      closeAddModal();
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Modal isVisible={isVisible} animationIn="zoomIn" animationOut="zoomOut" style={{ alignSelf: 'center' }}>
        <View style={styles.container}>
        <Text style={styles.title}>Titulo</Text>
          <TextInput
            placeholder="The Walking Dead"
            value={title}
            onChangeText={setTitle}
            style={styles.textInput}
          />
          <Text style={styles.title}>Poster</Text>
          <TextInput
            placeholder="Insertar el link del poster"
            value={poster}
            onChangeText={setPoster}
            style={styles.textInput}
          />
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
          <Pressable style={{ backgroundColor: 'green', paddingVertical: 10 }} onPress={addSerie} >
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>{loading ? (<ActivityIndicator size="small" color="black" />) : 'Añadir'}</Text>
        </Pressable>
        <Button title='Cancelar' onPress={closeAddModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 750,
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

export default AddModal;

import { PlaceType } from '@/Data/InterPlaces';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, TextInput } from 'react-native';
import { usePlacesList } from '../Data/Places';
export default function AddPlacePage({ navigation }: any) {
  const [name, setName] = useState('');//----------------переменная для передачи имени
  const [type, setType] = useState('');//----------------переменная для передачи типа
  const [description, setDescription] = useState('');//--переменная для передачи описания
  const [adress, setAdress] = useState('');//------------переменная для передачи адресса
  const [image, setImage] = useState('');//--------------переменная для передачи url
  const [raiting, setRaiting] = useState('');//----------переменная для передачи рейтнга

  const addPlace = usePlacesList(s => s.addPlace);//-----получаем фуекцию для добавления места
  const places = usePlacesList(s => s.places);//---------получаем список мест, чтобы узнать какой последний айди

  function AddPlace() {//--------------------------------функция ждя добавления места
    const newPlace = {
      id: Math.max(...places.map(p => p.id)) + 1,//------кратко говоря айди = последний айди +1
      name,
      type: type as PlaceType,//-------------------------унаследуем типы из файла InterPlaces
      raiting: Number(Number),//-------------------------не знаю как иначе указать числовое значение тут
      adress,
      description,
      image,
    };
    addPlace(newPlace);//--------------------------------добавляем место в масив мест
    navigation.goBack();//-------------------------------идем на главную страницу
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Cafe; Restaurant, Park, Museum, Store, Monument" value={type} onChangeText={setType} />
      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Adress" value={adress} onChangeText={setAdress} />
      <TextInput style={styles.input} placeholder="URL image" value={image} onChangeText={setImage} />
      <TextInput style={styles.input} placeholder="Raiting" value={raiting} onChangeText={setRaiting} keyboardType="numeric" />
      <Button title="Add" onPress={AddPlace} />{/*-используем функцию для добавления элемента-*/}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20,
    gap: 10
 },
  input: { 
    borderWidth: 1,
    borderColor: '#999',
    padding: 8, 
    borderRadius: 6
 },
});
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import CardPlace from '../Components/CardPlace';
import { usePlacesList } from '../Data/Places';

export default function MainPage() {
  //---нужно для навигации, для смены страницы на AddPlacePage LocationPage а вот переход на DetailsPage находиться внутри карточки в файле CardPlace а не тут, ведь можно будет эти карточки выводить в других файлах что удобно в целом но тут такого нет
  const navigation = useNavigation<any>();
  //---для пагинации, берет внутрь по 10 карточек в 'slice(s, s + 10)' и для пагинации оно делает -10 либо +10, не знаю как грамотно обьяснить
  const [s, setS] = useState(0);
  //---имеет внутри себя то что находиться в панели ввода, так как это useState то фильтра по названию работает автоматически во время ввода без кнопки поиск
  const [query, setQuery] = useState('');
  //---имеет внутри себя все места брав их с Place.tsx
  const allPlaces = usePlacesList(st => st.places);
  //---это некий булевский флаг для филтрации по избранному, если он равно true но филтровать по избранному надо а если false то не надо
  const [isFavoriteFilter, setIsFavoriteFilter] = useState(false);
  //---список id элементов добавленных в избранное, можно будет удобно по ним фильтровать 
  const favorites = usePlacesList(st => st.favorites);
  //---имеет внутри себя филтр по названию, p.name.toLowerCase().includes-> все назваиния мест с маленькой буквы сопостовляються через includes с тем что мы ввели в панель query и то что мы ввели так же преобразуеться в маленькие буквы
  //---&& (isFavoriteFilter ? favorites.includes(p.id) : true) -> дополнительный фильтр для избраного, если айди элемента = елемент из масива избранных мест, а еще && для фильтров это очень удобно кста
  const filterPLace = allPlaces.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) &&
    (isFavoriteFilter ? favorites.includes(p.id) : true)
  );
  return (
  
  <View style={styles.mainContainer}>{/*----------------------------------------кнопка поиска, тмеет внутри переменную query, использует функцию для ее смены setQuery которая работает в фильрах и стирает s-какие карточки сейчас выводяться*/}
    <TextInput
      style={styles.input}
      placeholder="Search..."
      value={query}
      onChangeText={(t) => { setQuery(t); setS(0); }}
    />

    <Pressable
      style={[styles.FavoriteFilterButton, { backgroundColor: isFavoriteFilter ? 'blue' : 'white' }]}
      onPress={() => { setIsFavoriteFilter(!isFavoriteFilter); setS(0); }}
    >{/*-----------------------------------------------------------------------кнопка для фильтра по избранным местам, меняет типо флаг переменную для фильра мест*/}
      <Text>Favorite LIst</Text>
    </Pressable>

    <Pressable
      style={styles.LocationButton}
      onPress={() => navigation.navigate('Location')}
    >{/*------------------------------------------------------------------------кнопка для перехода на страницу с получением своего местонахождения*/}
      <Text>My location</Text>
    </Pressable>

    <Pressable
      style={styles.AddPlaceButton}
      onPress={() => navigation.navigate('AddPlace')}
    >{/*------------------------------------------------------------------------кнопка для перехода на страницу для добавления мест*/}
      <Text>AddPlace</Text>
    </Pressable>



    <ScrollView contentContainerStyle={styles.Scroll}>{/*-----------------------пагинация на 10 элементов*/}
      {filterPLace.slice(s, s + 10).map(p => <CardPlace key={p.id} place={p} />)}
    </ScrollView>

    <View style={styles.paginationButtonLeft}>
      <Button title="<" onPress={() => setS(s - 10)} disabled={s === 0} />
    </View>{/*-------------------------------------------------------------------перелистывания пагинации влево, если карточек так скажем сзади нету s === 0 то мы не сможем листнуть назад ибо некуда*/}

    <View style={styles.paginationButtonRight}>
      <Button title=">" onPress={() => setS(s + 10)} disabled={s + 10 >= filterPLace.length} />
    </View>{/*-------------------------------------------------------------------пагинация вперед, если листнуть вперед товесть на s+10 будет больше чем количество элементов в целом то листать вперед некуда*/}
  </View>
);
}

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#999', 
    margin: 5,
    padding: 8,
    width: 300,
  },
  Scroll:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center' 
  },
  paginationButtonLeft:{
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 50,
    left: 30
  },
  paginationButtonRight:{
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 50,
    right: 30
  },
  FavoriteFilterButton:{
    width: 200,
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 5,
    backgroundColor: '#12f',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LocationButton:{
    zIndex: 2,
    width: 200,
    borderRadius: 10,
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  AddPlaceButton:{
    zIndex: 2,
    width: 200,
    borderRadius: 10,
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
});
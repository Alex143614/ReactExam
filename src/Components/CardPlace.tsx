import { Place } from '@/Data/InterPlaces';
import { usePlacesList } from '@/Data/Places';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
export default function CardPlace({ place }: { place: Place }) {
  const navigation = useNavigation<any>();
  //---мы получаем список айдишников с файла Places.ts, используем там типо реализацию нашего интерфейса "export const usePlacesList = create<PlacesList>((set)" и получаем с помощью него список айдишников 
  const favorites = usePlacesList(s => s.favorites);
  //---мы унаследуем функцию добавления в избранное для использования в кнопке с сердечком  
  const addFavorite = usePlacesList(s => s.addFavorite);
  //---мы унаследуем функцию удаления из избраного для использования в кнопке с сердечком  
  const removeFavorite = usePlacesList(s => s.removeFavorite);
  //---это для проверки 
  const isFav = favorites.includes(place.id);
  //---типо булевский флаг для проверки в избранном карточка или нет
  const onHeart = () => {
    isFav ? removeFavorite(place.id) : addFavorite(place.id);
  };

  return (
  <Pressable onPress={() => navigation.navigate('Details', { place })}>{/*---------------для перехода на страницу деталей карточки*/}
    <ImageBackground source={{ uri: place.image }} style={styles.CardContainer}>
      <Text style={styles.Name}>{place.name}</Text>
      <Pressable onPress={onHeart} style={styles.AddToFavorite}>
        <Text style={[styles.FavoriteText, { color: isFav ? '#f12' : '#fff' }]}>{/*--меняем цвет на красный если место в избранном*/}
          ❤︎
        </Text>
      </Pressable>
      <View style={styles.Stars}>
        <Text style={styles.StarsText}>⭐</Text>
        <Text style={styles.RaitingText}>{place.raiting}</Text>
      </View>
    </ImageBackground>
  </Pressable>
);
}

const styles = StyleSheet.create({
  CardContainer: {
    margin: 10, 
    width: 350, 
    height: 250,
    borderWidth: 1, 
    borderColor: '#999', 
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
  
  },
  Name: {
    alignContent: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 30
  },
  AddToFavorite: {
    position: 'absolute', 
    width: 40, 
    height: 40,
    right: 5, 
    bottom: 10, 
    borderRadius: 30,
    alignItems: 'center',
     justifyContent: 'center', 
     backgroundColor: '#999',
  },
  FavoriteText: { 
    fontSize: 25, 
    color: '#000'
  },
  Stars: {
    position: 'absolute',
    width: 40, 
    height: 40,
    right: 5,
    bottom: 60, 
    borderRadius: 30,
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#999',
  },
  StarsText: { 
    fontSize: 25, 
    position: 'absolute' 
  },
  RaitingText: { 
    fontSize: 17 
  },
});
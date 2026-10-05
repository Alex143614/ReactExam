import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import { Place } from '../Data/InterPlaces';

export default function DetailsPage({ route }: any) {//---------------как бы любой параметр но я туда передаю place, менее понятно но проще пишеться
  const place: Place = route.params.place;//--------------------------наследуем тип данный/класс/интерфейс для мест в параметре
  
  return (
    <ScrollView contentContainerStyle={styles.container}>{/*----------выводим детали места*/}
      <Image source={{ uri: place.image }} style={styles.image} />
      <Text style={styles.name}>{place.name}</Text>
      <Text style={styles.type}>{place.type}</Text>
      <Text style={styles.raiting}>⭐-{place.raiting}</Text>
      <Text style={styles.adress}>{place.adress}</Text>
      <Text style={styles.description}>{place.description}</Text>
    </ScrollView>
  );
}

//---эти стили писал не я
const styles = StyleSheet.create({
  container: { 
    padding: 20 
  },
  image: { 
    width: '100%', 
    height: 250, 
    borderRadius: 10 
  },
  name: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 10 
  },
  type: { 
    fontSize: 16, 
    color: '#666', 
    marginTop: 4 },
  raiting: { 
    fontSize: 16, 
    marginTop: 4 
  },
  adress: { 
    fontSize: 16, 
    marginTop: 4 
  },
  description: { 
    fontSize: 14, 
    marginTop: 10 
  },
});
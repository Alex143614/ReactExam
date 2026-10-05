import { Button, StyleSheet, Text, View } from 'react-native';
import { useLocation } from '../Hooks/LocationHook';
//---для начала лучше просмотреть -> Hooks/LocationHook

export default function LocationPage() {
  const { coords, error, getLocation } = useLocation();//-------перменные для координат, ошибки, функции для получения места 
  return (
    <View style={styles.container}>
      <Button title="My Location" onPress={getLocation} />{/*---кнопка для получения местонахождения вызвав функция из нашего хука из файла Hooks/LocationHook*/}
      {error && <Text style={styles.error}>{error}</Text>}{/*---Выводим ошибку если она есть*/}
      {coords && (
        <>{/*---------------------------------------------------Выводим координаты если они есть и пользователь дал доступ*/}
          <Text>Latitude: {coords.lat}</Text>
          <Text>Longitude: {coords.lon}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10 
  },
  error: {
    color: 'red' 
  },
});
import AddPlacePage from '@/Pages/AddPlacePage';
import LocationPage from '@/Pages/LocationPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import DetailsPage from './Pages/DetailsPage';
import MainPage from './Pages/MainPage';

function App() {
    //---типо переменная для смены страниц полученная с библиотеки реакт навигатор как и было указано в требовании задания
    const Page = createNativeStackNavigator();
    //---параметр для получения размеров экрана пользователей
    const {width} = useWindowDimensions();
    //---проверка на ширину чтобы если это планшет или пк то можно будет вставить боковые рамки и не морочить голову с адаптацией
    const IsWidth = width > 700;
    return (
        
        <View style={styles.container}>
            {IsWidth &&(<View style={styles.leftBorder}></View>)}{/*-------левая рамка*/}

            <NavigationContainer>{/*---------------------------------------основной контейнер для страниц с библиотеки реактнавигатор*/}
              <Page.Navigator initialRouteName="MainPage">{/*--------------страница по умолчанию*/}
              <Page.Screen name="MainPage" component={MainPage} />{/*------Подключаем главную страницу*/}
              <Page.Screen name="Details" component={DetailsPage} />{/*----Подключаем страницу деталей*/}
              <Page.Screen name="Location" component={LocationPage} />{/*--Подключаем страницу получения местоположения*/}
              <Page.Screen name="AddPlace" component={AddPlacePage} />{/*--Подключаем страницу для добавления мест*/}
              </Page.Navigator>
            </NavigationContainer>

            {IsWidth &&(<View style={styles.rightBorder}></View>)}{/*------правая рамка*/}
        </View>
    );
}

const styles = StyleSheet.create({
  //---у меня возник небольшой геморой с рамками, absolute глючил и не отображал либо не так позиционировал
  //---Поэтому я сделал типо линейный рендеринг(flexDirection: 'row',), сначла левая рамка, потом все остльное, потом правая рамка и все работает хорошо
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  //---левая боковая панель при широком экране
  leftBorder: {
    width: "20%",
    height: "100%",
    position: 'relative',
    left: 0,
    top: 0,
    backgroundColor: '#999',
  },
  //---правая боковая панель при широком экране
  rightBorder: {
    width: "20%",
    height: "100%",
    position: 'relative',
    right: 0,
    top: 0,
    backgroundColor: '#999',
  },
});

//---я не знаю что это и зачем но без него ничего не работает, ии сказал ее использовать, вероятно что-то сломал в packeges.json или tsConfig, не знаю
registerRootComponent(App);
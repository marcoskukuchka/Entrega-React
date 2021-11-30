// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeBaseProvider} from 'native-base'
import {useFonts} from '@use-expo/font'

import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/HomeScreen';
import GuiaScreen from './components/screens/GuiaScreen';
import HoyScreen from './components/screens/HoyScreen';
import InfoScreen from './components/screens/InfoScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
   
    <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false,
      tabBarStyle: {backgroundColor: '#fff',
                     position: 'absolute',
                     height: 60,
                     borderTopLeftRadius: 15,
                     borderTopRightRadius: 15}}}
                     screenOptions={{activeTintColor: '#ff4800'}}>

    <Tab.Screen name="Login" component={LoginScreen}
        options={{title:'Bienvenidos',
          tabBarLabel: 'Login',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/icons/sesion.jpg')}
              style={{width: 24, height: 24, tintColor: tintColor}}
            />)
        }} />

       <Tab.Screen name="Home" component={HomeScreen}
       options={{
         tabBarLabel: 'Inicio',
         tabBarIcon: ({ tintColor }) => (
           <Image
             source={require('./assets/icons/home.png')}
             style={{width: 24, height: 24, tintColor: tintColor}}
           />)
       }} />
       <Tab.Screen name="Guia" component={GuiaScreen} options={{
         tabBarLabel: 'Guia',
         tabBarIcon: ({ tintColor }) => (
           <Image
             source={require('./assets/icons/compas.png')}
             style={{width: 24, height: 24, tintColor: tintColor}}
           />)
       }} />
       <Tab.Screen name="Hoy" component={HoyScreen} options={{
         tabBarLabel: 'Hoy',
         tabBarIcon: ({ tintColor }) => (
           <Image
             source={require('./assets/icons/news.png')}
             style={{width: 24, height: 24, tintColor: tintColor}}
           />)
       }} />
       <Tab.Screen name="Info" component={InfoScreen} options={{
         tabBarLabel: 'Info',
         tabBarIcon: ({ tintColor }) => (
           <Image
             source={require('./assets/icons/info.png')}
             style={{width: 24, height: 24, tintColor: tintColor}}
           />)
       }}/>
     </Tab.Navigator>
    
  );
}

function App() {

  let [fontsLoaded] = useFonts({

    'Montserrat': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    'MontserratRegular':require('./assets/fonts/Montserrat/Montserrat-Regular.ttf')
    
});

if(!fontsLoaded){

return<View/>;
}else {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}
}

export default App;
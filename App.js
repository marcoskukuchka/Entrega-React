// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './components/screens/HomeScreen';
import GuiaScreen from './components/screens/GuiaScreen';
import HoyScreen from './components/screens/HoyScreen';
import InfoScreen from './components/screens/InfoScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false,
       tabBarStyle: {backgroundColor: '#fff',
                      position: 'absolute',
                      height: 60,
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15}}}
                      tabBarOptions={{activeTintColor: '#ff4800'}}>
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
    </NavigationContainer>
  );
}

export default App;
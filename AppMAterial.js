// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'black'} size={size} />
          ),
        }} />
        <Tab.Screen name="Guia" component={GuiaScreen}  options={{
          tabBarLabel: 'Guia',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="compass" color={'black'} size={size} />
          ),
        }} />
        <Tab.Screen name="Hoy" component={HoyScreen}  options={{
          tabBarLabel: 'Hoy',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper" color={'black'} size={size} />
          ),
        }} />
        <Tab.Screen name="Info" component={InfoScreen} options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={'black'} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
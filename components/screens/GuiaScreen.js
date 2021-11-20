// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../guia/MainScreen';
import SecondScreen from '../guia/SecondScreen';

const Stack = createNativeStackNavigator();

function GuiaScreen({ navigation }) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="MainGuia">
        <Stack.Screen name="MainGuia" component={MainScreen} />
        <Stack.Screen name="SecondGuia" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





export default GuiaScreen;
// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function InfoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Info Screen</Text>
      
    </View>
  );
}




export default InfoScreen;

const styles = StyleSheet.create({
  clima: {
    position: 'absolute',
    top: 0,
    left: 10,
  }
});
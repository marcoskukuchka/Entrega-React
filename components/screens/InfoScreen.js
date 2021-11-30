import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Carousel from './Carousel';
import { LinearGradient } from 'expo-linear-gradient';

export default function InfoScreen() {
  return (

    <SafeAreaView style={styles.container}>

      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />


      <Carousel />

    </SafeAreaView>

  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6f4f28',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
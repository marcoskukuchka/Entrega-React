import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH*0.7)


const CarouselItem =({ item, index }) => {
  return (
      <View style={styles.container} key={index}>
            <Image
            source={{uri: item.source}}
            style={styles.image}
            />
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.header}>{item.description}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        borderRadius:8,
        width: ITEM_WIDTH,
        paddingBottom: 40,
        elevation:7,
        
    },
    image:{
        width: ITEM_WIDTH,
        height:300,
    },
    header:{
        color:'#222',
        fontSize:18,
        fontFamily:'Montserrat',
        paddingLeft:20,
        paddingTop:20
    },
    body:{
        color:'#fff',
        fontSize:18,
        paddingLeft:20,
        paddingRight:20,
    },
})


export default CarouselItem;
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Share, Image } from 'react-native';


function Item({ navigation, item }) {
  const onSharePress = () => Share.share(shareOptions);
    const shareOptions = {
      title: 'Te comparto esta postal de Comodoro',
      message: 'Te comparto esta postal de Comodoro', // Note that according to the documentation at least one of "message" or "url" fields is required
      url: item.promoted_image.formats.large.url,
      subject: 'Subject'
    };



  return (
    
    <View>
      <TouchableOpacity  onPress={() => onSharePress(shareOptions)}>
              
            <Image
              style={styles.imag}
              source={{
              uri: item.promoted_image.formats.large.url,
            }}
          />
          
      </TouchableOpacity>

    
    </View>

     
      
   

  );
}





const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    
  },
  text: {
      fontSize: 25,
      color: '#000',
      fontWeight: 'bold',
      paddingLeft: 15,
  },
  imag: {
    marginHorizontal: 20,
    borderRadius: 10,
    width: '90%',
    height: 250,
    backgroundColor: 'lightblue',
    marginTop: 5,
    marginBottom: 5,
    
  }
  
});

export default Item;
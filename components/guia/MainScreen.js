import React, {useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import axios from 'axios';

const API_URL = 'https://comodoro-admin.herokuapp.com/sections/1';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


function MainScreen({ navigation }) {
  const [data, setData] = useState(null);

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  

  React.useEffect(() => {
    axios.get(API_URL).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  if (!data) return null;

console.log(data.promoted_image.formats.large.url)
  return (
    
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>

        <Image
            style={styles.heroImg}
            source={{
            uri: data.promoted_image.formats.large.url,
          }}
        />

          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.lead}>{data.description}</Text>

      </View>
      <FlatList
        data={data.categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flat}
      />
    </SafeAreaView>

     
      
   

  );
}





const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
  },
  containerText:{
    top: 1,
  },
  heroImg: {
      width: 600,
      height: 300,
      resizeMode: 'cover',
      top: 0,
        
  },
  title:{
    color: '#fff',
    fontSize: 34,
    zIndex: 1,
    top: -150,
    left: 16,
    fontWeight: 'bold',
  },
  lead:{
    color: '#fff',
    fontSize: 16,
    zIndex: 1,
    top: -130,
    paddingHorizontal: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
    
  },
  flat:{
    flex: 2,
    marginHorizontal: 100,
    color: '#000',
    backgroundColor: '#000'
  }
  
});

export default MainScreen;
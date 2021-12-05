import React, {useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Items from './Items'
import axios from 'axios';

const API_URL = 'https://comodoro-admin.herokuapp.com/posts?categories.id=7';

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
    });
  }, []);

  if (!data) return null;

  return (
    
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>

        <Image
            style={styles.heroImg}
            source={{
            uri: data[0].categories[0].image.formats.large.url,
          }}
        />

          <Text style={styles.title}>{data[0].categories[0].title}</Text>
          <Text style={styles.lead}></Text>

      </View>
      <View style={styles.contenedorLista}>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem = {({ item }) => (
                      <Items item={item} onPress={() => handlePress(item)}/>
                  )}
          style={styles.flat}
        />
      </View>
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
      top: -25,
        
  },
  title:{
    color: '#fff',
    fontSize: 34,
    zIndex: 1,
    top: -170,
    left: 16,
    fontWeight: 'bold',
  },
  lead:{
    color: '#fff',
    fontSize: 16,
    zIndex: 1,
    top: -150,
    paddingHorizontal: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
    
  },
  contenedorLista: {
    justifyContent: 'center',
  },
  flat:{
    top: -80,
  }
  
});

export default MainScreen;
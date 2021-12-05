import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Linking } from 'react-native';
import { Card } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

const API_URL = 'http://api.mediastack.com/v1/news?access_key=d00d6fbdf72d15bcaf0fdaa8332ee239&languages=es';

function HoyScreen({ navigation }) {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    axios.get(API_URL).then((response) => {
      setData(response.data);

    });
  }, []);

  if (!data) return null;

  return (

    <SafeAreaView style={{backgroundColor:'#E7E6E2'}}>

        <Image style={styles.heroImg} source={require('../../assets/comodoro-hoyscreen.jpg')} />
        <Text style={styles.title}>Hoy</Text>
        <Text style={styles.lead}>Noticias del día</Text>

        <FlatList
          data={data.data}
          keyExtractor={item => item.url}
          renderItem={({ item }) => (

            <Card style={{}}>
              <Card.Title style={styles.titulo} onPress={() => Linking.openURL(item.url)}>{item.title}</Card.Title>
              <Card.Divider />
              <Image style={styles.imagen} resizeMode='contain' source={item.image ? { uri: item.image } : require('../../assets/comodoro-fly.jpeg')} />
              <Text style={styles.paragraph}>{item.description} </Text>
              <Text style={styles.author}>Por {item.author} </Text>
            </Card>
          )}
        />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  
  paragraph: {
    fontSize: 16,
    textAlign: 'justify',
    color: 'black',
    fontFamily: 'MontserratRegular'
  },
  titulo: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat'
  },
  author: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Montserrat',
    textAlign: 'justify',
  },
  imagen: {
    width: 380,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImg: {
    width: 600,
    height: 300,
    resizeMode: 'cover',
    top: -25,
    
  },
  title: {
    color: '#fff',
    fontSize: 34,
    zIndex: 1,
    top: -150,
    left: 16,
    fontFamily: 'Montserrat'
  },
  lead: {
    color: '#fff',
    fontSize: 16,
    zIndex: 1,
    top: -130,
    paddingHorizontal: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom:-80,
    fontFamily: 'Montserrat'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});

export default HoyScreen;


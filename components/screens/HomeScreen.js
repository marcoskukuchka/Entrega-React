
import React, {useState, useEffect, useCallback} from 'react';

import { View, Text ,StyleSheet, StatusBar, Image, ActivityIndicator, TouchableOpacity, Share } from 'react-native';
import { Video } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';


const openweather_api = 'http://api.openweathermap.org/data/2.5/forecast?id=3860443&APPID=2eb23be457f4409e9d8eada570d32341';

const onSharePress = () => Share.share(shareOptions);
const shareOptions = {
  title: 'Lugares y Actividades',
  message: 'https://turismocomodoro.com.ar/',
  url: 'https://turismocomodoro.com.ar/',
  subject: 'https://turismocomodoro.com.ar/',
};

function HomeScreen({ navigation }) {
  const [weather, setWeather] = useState(0);
  const [loading, setLoading] = useState(true);

 
  const getWeather = useCallback(async () => {
    const res = await fetch(openweather_api);
    const response = await res.json();
    const listTemp = response.list[0];
    await setWeather(listTemp);
    await setLoading(false);
  }, []);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  const kToC = kelvin => {
    var kToCel = Math.round(kelvin - 273.15);
    return kToCel;
  };
  

  const video = React.useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Video
        ref={video}
        style={styles.backgroundVideo}
          source={
            require('../../assets/video/VideoWebsite.mp4')
          }
          rate={1.0}
          volume={1.0}
          isMuted={true}
          resizeMode='cover'
          isLooping={true}
          shouldPlay={true}        
        />
        <Image
          style={styles.comodoroLogo}
          source={require('../../assets/logo-comodoro.png')}
        />
        <Text style={styles.vivi}>Vivi</Text>
        <Text style={styles.title}>Comodoro Turismo</Text>
        <TouchableOpacity
          style={styles.shareIcon}
          onPress={() => onSharePress(shareOptions)}>
          <Image
            style={styles.shareIconImg}
            source={require('../../assets/icons/share.png')}
          />
        </TouchableOpacity>
        {
          loading ? <ActivityIndicator/> : (
            
            <View style={styles.containerWeather}>
              <Text style={styles.temp}>{kToC(weather.main.temp)}º</Text>
              <Image
                style={styles.weatherLogo}
                source={{uri: 'http://openweathermap.org/img/w/' +
                weather.weather[0].icon + '.png'}}
              />
            </View>
          )
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  backgroundVideo: {
    width: 500,
    height: 700,
    zIndex: 0,
  },
  vivi: {
    position: 'absolute',
    top: 235,
    left: 16,
    color: '#fff',
    fontSize: 24, 
  },
  title: {
    position: 'absolute',
    top: 275,
    left: 16,
    color: '#fff',
    fontSize: 42,
    lineHeight: 45,
    fontWeight: 'bold', 
  },
  temp:{
    position: 'absolute',
    top: 365,
    left: 20,
    color: '#fff',
    fontSize: 24, 
  },
  weatherLogo: {
    position: 'absolute',
    top: 360,
    left: 60,
    width: 50,
    height: 50,
  },
  containerWeather:{
    position: 'absolute', 
  },
  comodoroLogo:{
    position: 'absolute',
    width: 44,
    height: 32,
    left: 20,
    top: 50,
    paddingHorizontal: 1,
        
  },
  shareIcon:{
    position: 'absolute',
    left: 300,
    top: 50,
  },
  shareIconImg:{
    width: 25,
    height: 25,

  }
 
});

export default HomeScreen;
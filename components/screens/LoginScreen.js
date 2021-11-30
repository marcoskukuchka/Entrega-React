import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import * as Google from 'expo-auth-session/providers/google';
import { LinearGradient } from 'expo-linear-gradient';


function LoginScreen({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '773053063323-25eama2p8bvddab5tofnm8nrjv3iu6pt.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      console.log(response);
      navigation.navigate("Home", { auth: response.authentication })
    }
  }, [response]);

  return (

    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image source={{ uri: 'https://elcomodorense.net/wp-content/uploads/2020/01/WhatsApp-Image-2019-11-16-at-20.57.08.jpeg' }} style={{ position: 'absolute', width: 500, height: 900, zIndex: -1, }} />
      <Text style={{ fontSize: 50, marginVertical: 50, color: 'white', fontFamily: 'Montserrat' }}>Bienvenidos</Text>
      
      <View style={{ marginTop: 250 }}>

        <TouchableOpacity style={styles.button} onPress={() => { promptAsync(); }}>
          <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
            <Text style={styles.text}>LOGIN</Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>
      <Text style={{ fontSize: 50, marginVertical: 160, color: 'white', textAlign:'center', fontFamily: 'Montserrat' }}>Comodoro Turismo</Text>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  button: {
    width: 70,
    height: 45,
    fontFamily: 'Montserrat'
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat'
  }
});



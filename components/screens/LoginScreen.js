import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button } from 'native-base';
import * as Google from 'expo-auth-session/providers/google';


function LoginScreen({navigation}) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '773053063323-25eama2p8bvddab5tofnm8nrjv3iu6pt.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      console.log(response);
      navigation.navigate("Home", {auth: response.authentication})
      }
  }, [response]);

  return (

    <View style={{flex:1, alignItems:'center'}}>
             <Image source={require('../../assets/comodoro-al-atardecer.jpg')} style={{position: 'absolute',   width: 500, height: 700, zIndex: 0,}}/>
                <Text style={{fontSize:50, marginVertical:50, color: 'white'}}>Bienvenido</Text>
                <View style={{marginTop:100}}>
                 
                <Button size="lg" 
                onPress={() => {
                    promptAsync();
                    }}> Login</Button>

                </View>

    </View>
  );
}

export default LoginScreen
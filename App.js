import * as React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NativeBaseProvider} from 'native-base'
import {useFonts} from '@use-expo/font'
import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/HomeScreen';
import GuiaScreen from './components/screens/GuiaScreen';
import HoyScreen from './components/screens/HoyScreen';
import InfoScreen from './components/screens/InfoScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Prueba';
    case 'Guia':
      return 'Prueba2';
    case 'Info':
      return 'Prueba3';
  }
}

function HomeTabs({navigation,route}) {

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);
  return (
   
    <Tab.Navigator screenOptions={{ headerShown: false,
      tabBarStyle: {backgroundColor: '#fff',
                     position: 'absolute',
                     height: 60,
                     borderTopLeftRadius: 15,
                     borderTopRightRadius: 15}}}
                     >

   

       <Tab.Screen name="Home" component={HomeScreen}
       options={{
         tabBarLabel: 'Inicio',
         tabBarIcon: ({ tintColor }) => (
           <Image
             source={require('./assets/icons/home.png')}
             style={{width: 24, height: 24, tintColor: tintColor}}
           />)
       }} />
       <Tab.Screen name="Guia" component={GuiaScreen} options={{
         tabBarLabel: 'Guia',
         tabBarIcon: ({ tintColor }) => (
           <Image
             source={require('./assets/icons/compas.png')}
             style={{width: 24, height: 24, tintColor: tintColor}}
           />)
       }} />
       <Tab.Screen name="Hoy" component={HoyScreen} options={{
         tabBarLabel: 'Hoy',
         tabBarIcon: ({ tintColor }) => (
           <Image
             source={require('./assets/icons/news.png')}
             style={{width: 24, height: 24, tintColor: tintColor}}
           />)
       }} />
       <Tab.Screen name="Info" component={InfoScreen} options={{
         tabBarLabel: 'Info',
         tabBarIcon: ({ tintColor }) => (
           <Image
             source={require('./assets/icons/info.png')}
             style={{width: 24, height: 24, tintColor: tintColor}}
           />)
       }}/>
     </Tab.Navigator>
     
  );
}

function App() {

  let [fontsLoaded] = useFonts({

    'Montserrat': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    'MontserratRegular':require('./assets/fonts/Montserrat/Montserrat-Regular.ttf')
    
});

if(!fontsLoaded){

return<View/>;
}else {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}
}

export default App;
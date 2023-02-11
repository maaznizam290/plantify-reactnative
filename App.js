import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash';
import {Image} from 'react-native';
import ProductPage from './src/screens/productpage';
import Oneproduct from './src/screens/oneproduct';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}></Stack.Screen> */}
        {/* <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="OneProduct" component={Oneproduct} />
        <Stack.Screen name="Homescreen" component={HomeScreen} /> */}
        {/* <Stack.Screen name="SignupScreen" component={SignupScreen} /> */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

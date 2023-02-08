import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash';
import {Image} from 'react-native';
import ProductPage from './src/screens/productpage';
import Oneproduct from './src/screens/oneproduct';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}></Stack.Screen>
        <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="OneProduct" component={Oneproduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

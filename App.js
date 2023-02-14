import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import Checkout from './src/screens/Checkout';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Product from './src/screens/product';
import Sidebar from './src/screens/sidebar';
import Signup from './src/screens/Signup';
import Splash from './src/screens/splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Order from './src/screens/Order';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={Splash} />
        <Stack.Screen name="ProductPage" component={Signup} />
        <Stack.Screen name="OneProduct" component={Login} />
        <Stack.Screen name="Homescreen" component={Home} />
        <Stack.Screen name="Signup" component={Product} />
        <Stack.Screen name="Login" component={Checkout} />
        <Stack.Screen name="" component={Sidebar} />
        <Stack.Screen name="Login" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

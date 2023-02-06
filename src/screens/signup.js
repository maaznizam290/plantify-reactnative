import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

const Signup = ({children}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/Botton.png')}
        style={{height: '50%'}}
      />
      <View style={{position: 'absolute'}}>{children}</View>
    </View>
  );
};

export default Signup;

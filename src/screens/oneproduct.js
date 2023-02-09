import {View, Text} from 'react-native';
import React from 'react';
import {Image, ScrollView, SafeAreaView} from 'react-native';

const Oneproduct = ({children}) => {
  return (
    <View>
      <Image
        style={{width: 500}}
        source={require('../assets/Rectangle42.png')}
      />
      {/* <Image
        source={require('../assets/Rectangle122.png')}
        style={{width: 50, marginTop: 160}}
      /> */}
      <Text
        style={{
          top: -40,
          left: 320,
          fontWeight: '900',
          fontSize: 23,
          color: '#FFFFFF',
        }}>
        $1090
      </Text>
      {/* <Text style= {{top: -70, left: 40, fontSize: 23, color: '#FFFFFF',opacity:70%}}>
        View 3 items
      </Text> */}
      <Text style={{top: -22, left: 30, fontSize: 23, fontWeight: '900'}}>
        Similar Products
      </Text>
      <Image source={require('../assets/Frame94.png')} />
      <Image
        source={require('../assets/Group139.jpg')}
        style={{width: 425, height: 176, left: 0, top: 6, marginTop: 25}}
      />
    </View>
  );
};

export default Oneproduct;

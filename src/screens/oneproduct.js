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
      <Image
        source={require('../assets/Rectangle122.png')}
        style={{width: 50, marginTop: 160}}
      />
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
      <Text style={{top: 30, left: 30, fontSize: 23}}>Similar Products</Text>
    </View>
  );
};

export default Oneproduct;

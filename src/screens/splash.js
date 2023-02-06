import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('Signup');
  }, 1500);
  return (
    <>
      <View
        style={{
          backgroundColor: '#000000',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/Rectangle118.png')}
          style={{
            height: 650,
            width: 550,
          }}
        />
        <Image
          source={require('../assets/Vector.png')}
          style={{
            width: 461,
            height: 450,
            left: 1,
            top: -495,
            flexDirection: 'row',
            alignItems: 'flex-start',
            opacity: 30,
            Blend: 'Screen',
          }}
        />
      </View>
      <Image
        source={require('../assets/Ellipse25.png')}
        style={{
          width: 76,
          height: 76,
          top: -595,
          left: 55,
          position: 'relative',
        }}
      />
      <Image
        source={require('../assets/Vector4.png')}
        style={{
          position: 'absolute',
          width: 1,
          height: 25,
          top: -13,
          flexDirection: 'column',
          margin: 33,
          paddingTop: 230,
          left: 160,
        }}
      />
      <Image
        source={require('../assets/Vector3.png')}
        style={{
          position: 'absolute',
          width: 240,
          height: 194,
          top: -77,
          flexDirection: 'row',
          margin: 67,
          left: 30,
        }}
      />

      <ActivityIndicator size={55} color="#0D986A" />
      <Image
        source={require('../assets/Ellipse27.png')}
        style={{
          width: 76,
          height: 76,
          left: 157,
          top: 15,
          position: 'absolute',
        }}
      />
      <Image
        source={require('../assets/Ellipse26.png')}
        style={{
          width: 76,
          height: 76,
          left: 277,
          top: 54,
          position: 'absolute',
        }}
      />
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 60,
          left: 75,
          top: 250,
          position: 'absolute',
        }}>
        {' '}
        PLANTIFY
      </Text>
      <Text
        style={{
          color: '0D986A',
          fontSize: 23,
          top: 135,
          position: 'absolute',
        }}>
        GET READY BE HIGYENIC
      </Text>
      <Image source={require('../assets/Rectangle122.png')} style={{top: -7}} />
    </>
  );
}

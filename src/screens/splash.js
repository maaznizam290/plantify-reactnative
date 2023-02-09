import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('ProductPage');
  }, 1000);
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
          width: 200,
          height: 154,
          top: -21,
          flexDirection: 'row',
          marginTop: 47,
          left: 90,
          // borderRadius: 75,
          // padding: 65,
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
          left: 244,
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
      <Image
        source={require('../assets/Rectangle122.png')}
        style={{top: 400, position: 'absolute'}}
      />
      <Text
        style={{
          top: 400,
          width: 227,
          height: 88,
          fontSize: 37,
          left: 24,
          color: '#0D986A',
          position: 'absolute',
        }}>
        GET READY BE HIGYENIC
      </Text>
      <Text
        style={{
          top: 510,
          width: 370,
          height: 92,
          fontSize: 16,
          left: 7,
          color: '#0D986A',
          position: 'absolute',
        }}>
        Jelajahi AiLearn untuk menambah kemampuanmu dalam mengoperasikan Adobe
        Illustrator
      </Text>

      <Image
        source={require('../assets/Botton.png')}
        style={{
          width: 320,
          position: 'absolute',
          top: 600,
          left: 15,
          borderRadius: 20,
        }}
      />
    </>
  );
}

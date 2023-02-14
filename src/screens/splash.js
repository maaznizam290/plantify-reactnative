import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Splash = ({navigation}) => {
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
            height: 700,
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
          }}
        />
      </View>
      <Image
        source={require('../assets/Ellipse25.png')}
        style={{
          width: 76,
          height: 76,
          top: -765,
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
          left: 250,
          top: 60,
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
          top: 440,
          width: 220,
          height: 88,
          fontSize: 26,
          left: 28,
          fontWeight: '600',
          color: '#0D986A',
          position: 'absolute',
        }}>
        GET READY BE HIGYENIC
      </Text>
      <Text
        style={{
          top: 530,
          width: 327,
          height: 92,
          fontSize: 14,
          left: 28,
          color: '#0D986A',
          position: 'absolute',
        }}>
        Jelajahi AiLearn untuk menambah kemampuanmu dalam mengoperasikan Adobe
        Illustrator
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style={{
          position: 'absolute',
          marginTop: 700,
          marginLeft: 30,
          backgroundColor: '#0D986A',
          width: 340,
          height: 48,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
          KIRIM
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Splash;

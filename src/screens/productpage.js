import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';

const ProductPage = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('OneProduct');
  }, 1500);
  return (
    <View>
      {/* <ScrollView contentContainerStyle={{flexGrow: 1}}> */}
      <Image
        source={require('../assets/Rectangle95.png')}
        style={{width: '105%'}}
      />
      <Image
        source={require('../assets/Logo1.png')}
        style={{
          position: 'relative',
          top: 22,
          height: 30,
          width: 190,
          marginLeft: 20,
          marginTop: -75,
        }}
      />
      <Image
        source={require('../assets/Rectangle28.png')}
        style={{
          // resizeMode: 'cover',
          left: 23,
          top: 35,
          width: '102%',
          height: 450,
          marginLeft: -25,
          // borderBottomLeftRadius: 23,
          // borderTopRightRadius: 55,
          // borderBottomWidth: 37,
        }}
      />
      <Image
        source={require('../assets/MaskGroup.png')}
        style={{top: 15, marginTop: -13, position: 'absolute'}}
      />
      <Image
        source={require('../assets/Vector.png')}
        style={{top: 14, marginTop: -15, position: 'absolute'}}
      />
      <Image
        source={require('../assets/sage.png')}
        style={{width: 300, height: 300, marginTop: -300, marginLeft: 150}}
      />
      <Text
        style={{
          top: 86,
          height: 21,
          width: 89,
          left: 34,
          marginTop: -490,
          fontFamily: 'Poppins',
          fontWeight: '900',
        }}>
        Air Purifier
      </Text>
      <Image
        source={require('../assets/Group66.png')}
        style={{width: 25, height: 23, top: 65, left: 118}}
      />
      <Image
        source={require('../assets/Rectangle63.png')}
        style={{
          width: 55,
          height: 20,
          top: 45,
          left: 320,
          borderRadius: 12,
        }}
      />
      <Image
        source={require('../assets/Star1.png')}
        style={{top: 30, left: 326}}
      />
      <Text style={{top: 14, left: 350, color: '#0D986A'}}>4.8</Text>
      <Text
        style={{
          top: 30,
          left: 26,
          fontFamily: 'Philosopher',
          fontSize: 46,
          fontWeight: 600,
          color: 'black',
        }}>
        Watermelon Pepomria
      </Text>
      <Text
        style={{
          top: 70,
          left: 46,
          fontFamily: 'Poppins',
          width: 43,
          height: 23,
          fontWeight: 900,
        }}>
        PRICE
      </Text>
      <Text
        style={{
          top: 70,
          left: 46,
          fontFamily: 'Poppins',
          width: 43,
          height: 23,
          fontWeight: 'bold',
        }}>
        $350
      </Text>
      <Text
        style={{
          top: 100,
          left: 46,
          fontFamily: 'Poppins',
          width: 43,
          height: 23,
          fontWeight: 900,
        }}>
        Size
      </Text>
      <Text
        style={{
          top: 100,
          left: 46,
          fontFamily: 'Poppins',
          width: 43,
          height: 23,
          fontWeight: 900,
        }}>
        5" h
      </Text>
      <Image
        source={require('../assets/Rectangle39.png')}
        style={{
          width: 72,
          height: 76,
          top: 480,
          left: 35,
          position: 'absolute',
        }}
      />
      <Image
        source={require('../assets/Group52.png')}
        style={{position: 'absolute', top: 508, marginLeft: 58}}
      />
      <Image
        source={require('../assets/Rectangle38.png')}
        style={{
          width: 72,
          height: 76,
          top: 480,
          left: 115,
          position: 'absolute',
        }}
      />
      <Image
        source={require('../assets/Vector1.png')}
        style={{position: 'absolute', top: 506, marginLeft: 138}}
      />
      <Image
        source={require('../assets/Group99.png')}
        style={{top: 280, left: 15}}
      />
      <Text style={{top: 280, left: 15}}>Plant Bio</Text>
      <Text style={{top: 280, left: 15}}>
        No green thumb required to keep our artificial watermelon peperomia
        plant looking lively and lush anywhere you place it.
      </Text>
      <Image
        source={require('../assets/image27.png')}
        // style={{top: -23, left: 20}}
      />
      <Image
        source={require('../assets/image29.png')}
        // style={{top: -20, left: 20}}
      />
      <Image source={require('../assets/image30.png')} />

      {/* </ScrollView> */}
    </View>
  );
};

export default ProductPage;

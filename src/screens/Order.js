import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../components/color';

const Order = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: colors.white}}>
      <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
        <View style={{marginLeft: 25, marginTop: 20}}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../assets/back.png')}
          />
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Image
          style={{width: 162, height: 162}}
          source={require('../assets/orderCircle.png')}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#0D986A', fontSize: 36, fontWeight: '800'}}>
          Order
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#0D986A', fontSize: 36, fontWeight: '800'}}>
          Received
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#002140', fontSize: 14, fontWeight: '500'}}>
          Order ID: #293092309
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 162, height: 162}}
          source={require('../assets/leaf.png')}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 90,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
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
      </View>
    </ScrollView>
  );
};

export default Order;

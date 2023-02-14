import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Navbar = () => {
  return (
    <View
      style={{
        backgroundColor: '',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginBottom: 5,
        width: '100%',
        marginTop: 5,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#001240',
        borderWidth: 0.5,
      }}>
      <TouchableOpacity>
        <View style={{width: 70, marginLeft: 20}}>
          <Image
            source={require('../assets/home.png')}
            style={{width: 40, height: 30}}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{width: 70}}>
          <Image
            source={require('../assets/Bheart.png')}
            style={{width: 30, height: 30}}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{width: 70}}>
          <Image
            source={require('../assets/Bcart.png')}
            style={{width: 35, height: 35}}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{width: 70}}>
          <Image
            source={require('../assets/Buser.png')}
            style={{width: 35, height: 35}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

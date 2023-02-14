import React, {Fragment, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Text} from 'react-native';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginButton = () => {
    const axios = require('axios');
    const data = JSON.stringify({
      email: 'hamzaamir@gmail.com',
      password: '1203232331',
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://192.168.18.207:3000/api/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={styles.back}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../assets/back.png')}
          />
        </TouchableOpacity>

        <View style={{marginTop: -250, marginRight: 220}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity>
              <Image
                style={{width: 25, height: 25, marginRight: 10}}
                source={require('../assets/leaf.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                color: '#002140',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 10,
              }}>
              PLANTIFY
            </Text>
          </View>
        </View>

        <View style={{marginRight: 250, marginTop: 20}}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: '700',
              width: 120,
              left: 5,
              color: '#0D986A',
            }}>
            Login
          </Text>
        </View>
        <View style={{marginRight: 350, marginTop: 10}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              width: 245,
              left: 120,
              marginTop: 20,
              color: '#0D986A',
            }}>
            Masukan NISN dan passwprd untuk memulai belajar sekarang
          </Text>
        </View>

        <View style={{marginRight: 244, marginTop: 20}}>
          <Text
            style={{
              color: '#004A6166',
              opacity: 0.4,
              fontSize: 16,
              fontWeight: '500',
            }}>
            Username/Email
          </Text>
        </View>

        <View style={{marginTop: 2}}>
          <Image
            style={{
              marginLeft: 12,
              width: 25,
              height: 25,
              marginTop: 10,
              alignItems: 'center',
              position: 'absolute',
            }}
            source={require('../assets/lockicon.png')}
          />
          <TextInput
            placeholder="Masukkan Password"
            value={username}
            onChangeText={text => setUsername(text)}
            placeholderTextColor="#004A61CC"
            style={styles.input}
          />
        </View>

        <View style={{marginRight: 285, marginTop: 20}}>
          <Text
            style={{
              color: '#004A6166',
              opacity: 0.4,
              fontSize: 16,
              fontWeight: '500',
            }}>
            Passowrd
          </Text>
        </View>

        <View style={{marginTop: 2}}>
          <Image
            style={{
              marginLeft: 12,
              width: 25,
              height: 25,
              marginTop: 10,
              alignItems: 'center',
              position: 'absolute',
            }}
            source={require('../assets/lockicon.png')}
          />
          <TextInput
            placeholder="Masukkan Password"
            value={password}
            onChangeText={text => setPassword(text)}
            placeholderTextColor="#004A61CC"
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <View style={{marginRight: -257}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              textDecorationLine: 'underline',
              color: '#004A61',
            }}>
            Lupa password
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => loginButton.navigation.navigate('Home')}>
          <Text style={styles.text}>MULAIBELAJAR</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  button: {
    width: 360,
    height: 48,
    top: 60,
    backgroundColor: '#0D986A',
    borderRadius: 20,
    padding: 20,
  },
  text: {
    height: 20,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
    top: -8,
    textAlign: 'center',
  },
  back: {
    position: 'absolute',
    width: 40,
    height: 40,
    left: 24,
    top: 20,
    color: '#004A61',
  },
  input: {
    fontSize: 16,
    width: 360,
    backgroundColor: '#E6E8EB',
    fontWeight: '500',
    color: 'black',
    borderWidth: 0.3,
    opacity: 0.5,
    paddingLeft: 40,
  },
});

export default Login;

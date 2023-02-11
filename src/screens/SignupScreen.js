import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import AntDesignIcon from 'react-native-vector-icons/dist/AntDesign';
// const axios = require('axios');
import axios from 'axios';
const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signup = () => {
    // const data = JSON.stringify({
    //   // "email": "msjsj@g.com",
    //   // "password": "3003",
    //   userName,
    //   password,
    // });
    // // console.log(data);
    // const config = {
    //   method: 'POST',
    //   maxBodyLength: Infinity,
    //   url: 'http://192.168.18.207:8000/api/register',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   data: data,
    // };

    // axios(config)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://192.168.18.207:8000/api/register', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  console.log(password);
  console.log(email);
  return (
    <Fragment>
      <View style={styles.container}>
        <TouchableOpacity style={styles.toop}>
          <EntypoIcon
            name="chevron-with-circle-left"
            color={'#004A61'}
            size={40}
          />
        </TouchableOpacity>

        <Text style={styles.textt}>PLANTIFY</Text>
        <Image style={styles.click2} source={require('../assets/leaf.png')} />

        <Text style={styles.blogin}>Signup</Text>
        <Text style={styles.para}>
          Masukan NISN dan password untuk memulai belajar sekarang
        </Text>

        <Text style={styles.emlpsd2}>UserName/Email</Text>
        <Text style={styles.emlpsd}>Password</Text>

        <TextInput
          value={email}
          style={styles.input}
          placeholder="Masukkan Email"
          onChangeText={text => setEmail(text)}
          secureTextEntry={true}
        />
        <View style={styles.loock2}>
          <AntDesignIcon name="user" color={'#004A61'} size={20} />
        </View>
        <View style={{backgroundColor: 'blue'}} />
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Masukkan Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <View style={styles.loock}>
          <AntDesignIcon name="user" color={'#004A61'} size={20} />
        </View>

        <TouchableOpacity style={styles.buton} onPress={() => signup()}>
          <Text style={styles.btext}>KIRIM</Text>
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
  input: {
    width: 300,
    height: 44,
    padding: 12,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    backgroundColor: '#FCFCFC',
    borderRadius: 4,
    fontSize: 16,
    margin: 30,
    paddingLeft: 30,
  },
  loock: {
    position: 'absolute',

    // width: 9,
    // height: 7,
    left: 35,
    top: 283,

    backgroundColor: '#FCFCFC',
  },
  loock2: {
    position: 'absolute',
    left: 10,
    top: 400,
    backgroundColor: '#FCFCFC',
  },
  emlpsd: {
    width: 130,
    height: 19,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    top: 110,
    left: -85,
    color: '#bebeb6',
  },
  emlpsd2: {
    width: 130,
    height: 19,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    top: 45,
    left: -85,
    color: '#bebeb6',
  },
  text: {
    fontSize: 16,
    lineHeight: 19.36,
  },
  textt: {
    position: 'absolute',
    width: 124,
    height: 20,
    left: 90,
    color: '#002140',
    top: 90,
    fontWeight: 700,
    fontSize: 18,
  },
  blogin: {
    width: 90,
    height: 40,
    top: -40,
    left: -99,
    color: '#0D986A',
    fontWeight: 700,
    fontSize: 28,
  },
  para: {
    position: 'absolute',
    width: 246,
    height: 42,
    left: 35,
    top: 180,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    color: '#0D986A',
  },
  buton: {
    width: 300,
    height: 48,
    top: 40,
    backgroundColor: '#0D986A',
    borderRadius: 20,
    padding: 20,
  },
  btext: {
    height: 20,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
    top: -8,
    // textAlign: 'center',
    paddingLeft: 95,
  },
  toop: {
    position: 'absolute',
    width: 40,
    height: 40,
    left: 24,
    top: 20,
    color: '#004A61',
  },
  toop2: {
    top: 8,
    left: 4,
    color: '#004A61',
  },
  click2: {
    position: 'absolute',
    width: 60,
    height: 40,
    left: 30,
    top: 80,
  },
});

export default SignupScreen;

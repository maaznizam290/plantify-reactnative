import React, {Fragment, useState} from 'react';
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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      email,
      password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    console.log(email);
    console.log(password);
    fetch('http://192.168.18.207:8000/api/login', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

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
        <Image style={styles.click2} source={require('../assets/search.png')} />

        <Text style={styles.blogin}>Login</Text>
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
          <AntDesignIcon name="lock1" color={'#004A61'} size={20} />
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
          <AntDesignIcon name="lock1" color={'#004A61'} size={20} />
        </View>

        <TouchableOpacity style={styles.buton} onPress={() => login()}>
          <Text style={styles.btext}>MULAIBELAJAR</Text>
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
    top: 312,

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
    top: 125,
    fontWeight: 700,
    fontSize: 18,
  },
  blogin: {
    width: 90,
    height: 40,
    top: -20,
    left: -99,
    color: '#0D986A',
    fontWeight: 700,
    fontSize: 30,
  },
  para: {
    position: 'absolute',
    width: 246,
    height: 42,
    left: 37,
    top: 210,
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
    paddingLeft: 57,
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
    top: 120,
  },
});

export default LoginScreen;

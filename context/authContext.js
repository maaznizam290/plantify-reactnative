import {View, Text} from 'react-native';
import React, {createContext} from 'react';
import axios from 'axios';
import {APPURL} from '../src/config/Appurl';

export const AuthContext = createContext();

const register = (email, password) => {
  axios
    .post(`${APPURL}/register`, {
      email,
      password,
    })
    .then(res => {
      let userInfo = res.data;
      console.log('The response is ', userInfo);
    })
    .catch(err => {
      console.log('The response errror is', err);
    });
};
export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={register}>{children}</AuthContext.Provider>
  );
};

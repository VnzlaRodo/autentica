import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountStack from './app/navigations/AccountStack';
import Navigation from './app/navigations/Navigation';
import Login from './app/screens/account/Login';
import Register from './app/screens/account/Register';


export default function App() {
  
  return (   

    //<Navigation />
    <AccountStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

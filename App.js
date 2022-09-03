import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './app/navigations/Navigation';
import Register from './app/screens/account/Register';


export default function App() {
  
  return (   

    //<Navigation />
    <Register />
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

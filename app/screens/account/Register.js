import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import RegisterForm from '../../components/account/RegisterForm';

export default function Register() {
  return (
    <KeyboardAwareScrollView>
      <Image 
        source={require("../../../assets/logo.jpg")}
        resizeMode="contain"
        style={styles.logo}
      />

      <View style={styles.viewForm}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 80,
    },
    viewForm:{
        marginRight: 40,
        marginLeft: 40
    }
});
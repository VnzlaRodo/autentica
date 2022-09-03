import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import LoginForm from '../../components/account/LoginForm';

export default function Login() {
    return (
        <KeyboardAwareScrollView>
          <Image 
            source={require("../../../assets/logo.jpg")}
            resizeMode="contain"
            style={styles.logo}
          />
    
          <View style={styles.viewForm}>
            <LoginForm />
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
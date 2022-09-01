import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { Input, Button, Icon  } from 'react-native-elements';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function RegisterForm() {
    const [ showPassword, setShowPassword ] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  return (
    <View styles={styles.formContainer}>
      <Input 
        placeholder='Correo Electronico'
        containerStyle={styles.inputForm}
        rightIcon={
            <Icon 
                type='material-community'
                name='at'
                iconStyle={styles.iconRight}
            />
        }
      />
      <Input 
        placeholder='Contraseña'
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassword ? false : true}
        rightIcon={            
            <Icon 
                type='material-community'
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                iconStyle={styles.iconRight}
                onPress={() => setShowPassword(!showPassword)}
            />            
        }
      />
      <Input 
        placeholder='Repetir Contraseña'
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showRepeatPassword ? false : true}
        rightIcon={
            <Icon 
                type='material-community'
                name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
                iconStyle={styles.iconRight}
                onPress={() => setShowRepeatPassword(!showRepeatPassword)}
            />
        }
      />
      <Button 
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    inputForm:{
        width: "100%",
        marginTop: 20
    },
    btnContainerRegister:{
        marginTop: 20,
        width: "95%"
    },
    btnRegister:{
        backgroundColor: "#00a680"
    },
    iconRight:{
        color: "#c1c1c1"
    }
});
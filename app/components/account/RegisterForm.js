import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button, Icon  } from 'react-native-elements';


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../../utils/firebase';

export default function RegisterForm() {
    const [ showPassword, setShowPassword ] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);    

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(() =>{
            console.log('Cuenta Creada');
            const user = userCredential.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }

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
        onChangeText={(text) => setEmail(text)}
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
        onChangeText={(text) => setPassword(text)}        
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
        onChangeText={(text) => setPassword(text)} 
      />
      <Button
        onPress={handleCreateAccount} 
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
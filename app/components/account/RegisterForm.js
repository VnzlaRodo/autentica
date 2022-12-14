import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Input, Button, Icon  } from 'react-native-elements';
import { validateEmail } from '../../utils/validations';
import { useNavigation } from "@react-navigation/native";

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../../utils/firebase';
import { size, isEmpty } from 'lodash';

export default function RegisterForm() {
    const [ showPassword, setShowPassword ] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);    

    const navigation = useNavigation();

    const onSubmit = () => {
        if ( isEmpty(email) || isEmpty(password) || isEmpty(repeatPassword) ){
            Alert.alert("Todos los campos son obligatorios");
        } 
        else if (!validateEmail(email)){
            Alert.alert("Email invalido");
        }
        else if (password !== repeatPassword){
            Alert.alert("Las contraseñas no coinciden");            
        }
        else if ( size(password) < 6  ){
            Alert.alert("La contraseña debe ser mayor a 6 digitos");
        }
        else {
            handleCreateAccount();
        }
    }
    
    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            Alert.alert('Cuenta Creada');
            const user = userCredential.user;
            console.log(user);
            navigation.navigate('login')
        })
        .catch(error => {
            switch (error.message) {
                case "Firebase: Error (auth/invalid-email).":
                    Alert.alert("Campo email invalido");
                    break;
                case "Firebase: Error (auth/missing-email).":
                    Alert.alert("Campo email vacio");
                    break;
                case "Firebase: Error (auth/email-already-in-use).":
                    Alert.alert("Email ya en uso");
                    break;
                default:
               Alert.alert(error.message);

                    break;
            }
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
        onChangeText={(text) => setRepeatPassword(text)} 
      />
      <Button
        onPress={onSubmit}
        title="Registrarse"
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
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, Button, Icon  } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { validateEmail } from '../../utils/validations';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../../utils/firebase';
import { size, isEmpty } from 'lodash';

export default function LoginForm() {
    const [ showPassword, setShowPassword ] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);    

    const onSubmit = () => {
        if ( isEmpty(email) || isEmpty(password) ){
            Alert.alert("Todos los campos son obligatorios");
        } 
        else if (!validateEmail(email)){
            Alert.alert("Email invalido");
        }
       
        else if ( size(password) < 6  ){
            Alert.alert("La contraseña debe ser mayor a 6 digitos");
        }
        else {
            handleSignIn();
        }
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((useCredential) => {
                //Alert.alert("logeado");
                const user = useCredential.user;
                console.log(user);
                navigation.navigate("logout");
            })
            .catch(error => {
                switch (error.message) {                    
                    case "Firebase: Error (auth/user-not-found).":
                        Alert.alert("Usuario invalido");
                        break;
                    case "Firebase: Error (auth/wrong-password).":
                        Alert.alert("Contraseña equivocada");
                        break;
                
                    default:
                        break;
                }
                console.log(error)
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
      
      <Button
        onPress={onSubmit} 
        title="Entrar"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
      />
      <Button 
        title="Registrarse"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnRegister}
        onPress={() => navigation.navigate("register")}
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
    btnContainerLogin:{
        marginTop: 20,
        width: "95%"
    },
    btnLogin:{
        backgroundColor: "#00a680"
    },
    btnRegister:{
        backgroundColor: "purple"
    },
    iconRight:{
        color: "#c1c1c1"
    }
});
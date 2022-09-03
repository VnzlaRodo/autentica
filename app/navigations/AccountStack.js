import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/account/Login';
import Register from '../screens/account/Register';
import Navigation from './Navigation';

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
        <Stack.Screen 
            name='login'
            component={Login}
            options={{ headerShown: false, title: "Login" }} 
            />
        <Stack.Screen 
            name='register'
            component={Register}
            options={{ headerShown: false, title: "Register" }} 
            />
        <Stack.Screen 
            name='logout'
            component={Navigation}
            options={{ headerShown: false, title: "app" }} 
            />
    </Stack.Navigator>
    </NavigationContainer>
  )
}
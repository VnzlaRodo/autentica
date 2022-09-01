import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Admin from '../screens/Admin';
import Register from '../screens/account/Register';

const Stack = createNativeStackNavigator();

export default function AdminStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="admin"
            component={Register}
            options={{ title: "Administrador" }}
        />
    </Stack.Navigator>
  )
}


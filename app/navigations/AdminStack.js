import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Admin from '../screens/Admin';

const Stack = createNativeStackNavigator();

export default function AdminStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="admin"
            component={Admin}
            options={{ title: "Administrador" }}
        />
    </Stack.Navigator>
  )
}


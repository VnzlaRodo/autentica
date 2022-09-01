import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="profile"
            component={Profile}
            options={{ title: "Perfil" }}
        />
    </Stack.Navigator>
  )
}


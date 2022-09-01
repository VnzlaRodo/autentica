import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Social from '../screens/Social';

const Stack = createNativeStackNavigator();

export default function SocialStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="social"
            component={Social}
            options={{ title: "Redes Sociales" }}
        />
    </Stack.Navigator>
  )
}


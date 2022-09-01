import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Reservation from '../screens/Reservation';

const Stack = createNativeStackNavigator();

export default function ReservationStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="reservation"
            component={Reservation}
            options={{ title: "Reservaciones" }}
        />
    </Stack.Navigator>
  )
}


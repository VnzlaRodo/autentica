import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Attendance from '../screens/Attendance';

const Stack = createNativeStackNavigator();

export default function AttendanceStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="attendance"
            component={Attendance}
            options={{ title: "Asistencia" }}
        />
    </Stack.Navigator>
  )
}


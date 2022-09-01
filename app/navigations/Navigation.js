import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';


import AdminStack from './AdminStack';
import AttendanceStack from './AttendanceStack';
import ReservationStack from './ReservationStack';
import SocialStack from './SocialStack';
import ProfileStack from './ProfileStack';


const Tab = createBottomTabNavigator();

export default function Navigation() {
  
    return (
     <NavigationContainer>
        <Tab.Navigator 
            initialRouteName='perfilStack'
            screenOptions={ ({ route }) => ({
                tabBarInactiveTintColor: "#646464",
                tabBarActiveTintColor: "#026D62",

                tabBarIcon: ({ color }) => screenOptions(route, color),
                
            })}
        >
            <Tab.Screen 
                name="adminStack"
                component={AdminStack} 
                options={{ headerShown: false, title: "Administrador" }} 
            />
            <Tab.Screen 
                name="attendanceStack" 
                component={AttendanceStack} 
                options={{ headerShown: false, title: "Asistencia" }} 
            />
            <Tab.Screen 
                name="reservationStack" 
                component={ReservationStack} 
                options={{ headerShown: false, title: "Reserva" }} 
            />
            <Tab.Screen 
                name="socialStack" 
                component={SocialStack} 
                options={{ headerShown: false, title: "Social" }} 
            />
            <Tab.Screen 
                name="profileStack" 
                component={ProfileStack} 
                options={{ headerShown: false, title: "Perfil" }} 
            />
        </Tab.Navigator>
     </NavigationContainer>
    )
  
}


function screenOptions(route, color){
    let icoName;

    switch (route.name) {
        case "adminStack":
            icoName = "key-outline"
        break;
        case "attendanceStack":
            icoName = "format-list-checks"
        break;
        case "reservationStack":
            icoName = "calendar"
        break;
        case "socialStack":
            icoName = "link-variant"
        break;
        case "profileStack":
            icoName = "account"
        break;
    
        default:
            break;
    }

    return <Icon type="material-community" name={icoName} size={22} color={color} />
}
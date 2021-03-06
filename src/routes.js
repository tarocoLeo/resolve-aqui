import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './pages/Home';
import New from './pages/New'
import Profile from './pages/Profile';
import Nickname from './pages/Nickname';
import Register from './pages/Register';
import Conflict from './pages/Conflict';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator

        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              if (route.name === 'Adicionar Conflito') {
                iconName = focused
                  ? 'create'
                  : 'create';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              if (route.name === 'Perfil') {
                iconName = focused
                  ? 'person'
                  : 'person';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#116FF6',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen 
            name="Home" 
            component={Home}
            screenOptions={{
                tabBarStyles: ({ size, color}) => (
                    <Entypo name="home" size={size} color={color} />
                )
            }}
            />
            
            
            <Tab.Screen 
            name="Adicionar Conflito" 
            component={New} 
            screenOptions={{
                tabBarIcon: ({ size, color}) => (
                    <Feather name="user" size={size} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name="Perfil" 
            component={Profile} 
            screenOptions={{
                tabBarIcon: ({ size, color}) => (
                    <Feather name="user" size={size} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name="Nickname" 
            component={Nickname} 
            screenOptions={{
                tabBarIcon: ({ size, color}) => (
                    <Feather name="user" size={size} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name="Register" 
            component={Register} 
            screenOptions={{
                tabBarIcon: ({ size, color}) => (
                    <Feather name="user" size={size} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name="Conflito" 
            component={Conflict} 
            screenOptions={{
                tabBarIcon: ({ size, color}) => (
                    <Feather name="user" size={size} color={color} />
                )
            }}
            />

        </Tab.Navigator>
    )
}
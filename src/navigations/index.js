// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import DrawerNavigator from './drawerNavigator';
import AdressScreen from '../screens/Adress';
import CreditCardScreen from '../screens/CreditCard';
import NameScreen from '../screens/Name';

const Stack = createNativeStackNavigator();

function Router() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
        <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen}
        />
        <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
        />
        <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
        />
        <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
        />
        <Stack.Screen 
            name="Drawer" 
            component={DrawerNavigator} 
        />
        <Stack.Screen 
            name="Adress" 
            component={AdressScreen} 
        />
        <Stack.Screen 
            name="CreditCard" 
            component={CreditCardScreen} 
        />
        <Stack.Screen 
            name="Name" 
            component={NameScreen} 
        />
      </Stack.Navigator>
  );
}

export default Router;
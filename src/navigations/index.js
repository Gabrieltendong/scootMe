// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

const Stack = createNativeStackNavigator();

function Router() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
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
      </Stack.Navigator>
  );
}

export default Router;
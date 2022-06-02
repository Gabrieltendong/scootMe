import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigations';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

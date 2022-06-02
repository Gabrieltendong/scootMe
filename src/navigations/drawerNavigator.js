import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home';
import ProfilScreen from '../screens/Profil';
import HistoryScreen from '../screens/History';
import ContactScreen from '../screens/Contact';
import LegalNoticeScreen from '../screens/LegalNotice';
import CGUScreen from '../screens/CGU';
import DrawerContent from '../components/layout/Drawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
        <Drawer.Navigator 
            screenOptions={{headerShown: false, overlayColor: 'transparent'}} 
            initialRouteName="Home"
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen 
                name="Home" 
                component={HomeScreen} 
            />
            <Drawer.Screen 
                name="Profil" 
                component={ProfilScreen} 
            />
            <Drawer.Screen 
                name="History" 
                component={HistoryScreen} 
            />
            <Drawer.Screen 
                name="Contact" 
                component={ContactScreen} 
            />
            <Drawer.Screen 
                name="LegalNotice" 
                component={LegalNoticeScreen} 
            />
            <Drawer.Screen 
                name="CGU" 
                component={CGUScreen} 
            />
        </Drawer.Navigator>
  );
}
//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';

import { styles } from './style';

// create a component
const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
        </View>
    );
};

//make this component available to the app
export default LoginScreen;

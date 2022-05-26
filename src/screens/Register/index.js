//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';

import { styles } from './style';

// create a component
const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Text>RegisterScreen</Text>
        </View>
    );
};

//make this component available to the app
export default RegisterScreen;

//import liraries
import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

import { styles } from './style';

// create a component
const Button = ({
    onPress,
    style,
    text
}) => {
    return (
        <TouchableOpacity 
            style={[styles.container, style]}
            onPress={onPress}
        >
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity>
    );
};

//make this component available to the app
export default Button;

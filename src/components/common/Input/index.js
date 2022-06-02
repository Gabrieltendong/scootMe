//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text,
    TextInput
} from 'react-native';


import { styles } from './style';
import { colors } from '../../../styles';

// create a component
const Input = ({
    placeholder,
    label,
    defaultValue,
    keyboardType,
    secureTextEntry,
    onChangeText,
    multiline,
    numberOfLines,
    style
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label_wrapper}>{label}</Text>
            <TextInput 
                placeholder={placeholder}
                defaultValue={defaultValue}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={colors.WHITE}
                style={[styles.input_wrapper, style]}
                multiline={multiline}
                numberOfLines={numberOfLines}
                onChangeText={onChangeText}
            />
        </View>
    );
};

//make this component available to the app
export default Input;

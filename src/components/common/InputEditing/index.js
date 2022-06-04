//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { styles } from './style';

// create a component
const InputEditing = ({
    label,
    defaultValue,
    onUpdate,
    showInput,
    onPress,
    secureTextEntry
}) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label_wrapper}>{label}</Text>
                {
                    showInput?
                    <TouchableOpacity onPress={onUpdate} style={styles.btn}>
                        <Text style={styles.text_light_blue}>Valider</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={onPress} style={styles.btn}>
                        <Text style={styles.text_light_blue}>Modifier</Text>
                    </TouchableOpacity>
                }
            </View>
            {
                showInput != undefined && 
                <View>
                    {
                        !showInput?
                        <Text style={[styles.text_light_blue]}>{defaultValue}</Text>
                        :
                        <TextInput
                            style={styles.input_wrapper}
                            defaultValue={defaultValue}
                            secureTextEntry={secureTextEntry}
                        />
                    }
                </View>
            }
        </View>
    );
};

//make this component available to the app
export default InputEditing;

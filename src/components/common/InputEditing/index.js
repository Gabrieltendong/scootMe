//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { styles } from './style';

// create a component
const InputEditing = ({
    label,
    defaultValue,
    onUpdate
}) => {

    const [showInput, setShowInput] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label_wrapper}>{label}</Text>
                <TouchableOpacity onPress={onUpdate} style={styles.btn}>
                    {
                        showInput?
                        <Text style={styles.text_light_blue}>Valider</Text>
                        :
                        <Text style={styles.text_light_blue}>Modifier</Text>
                    }
                </TouchableOpacity>
            </View>
            {
                showInput && 
                <View>
                    {
                        showInput?
                        <Text style={styles.text_light_blue}>{defaultValue}</Text>
                        :
                        <TextInput
                            style={styles.input_wrapper}
                            defaultValue={defaultValue}
                        />
                    }
                </View>
            }
        </View>
    );
};

//make this component available to the app
export default InputEditing;

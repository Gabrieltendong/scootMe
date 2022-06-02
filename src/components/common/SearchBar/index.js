//import liraries
import { Icon } from '@rneui/base';
import React, { Component, useRef, useState } from 'react';
import { 
    View, 
    Text,
    TextInput
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { colors } from '../../../styles';

import { styles } from './style';

// create a component
const SearchBar = () => {

    const [origin, setOrigin] = useState()
    const [destination, setDestination] = useState()
    const firstInputRef = useRef(null)
    const secondInputRef = useRef(null)

    return (
        <View style={styles.container}>
            <View style={styles.progress_wraper}>
                <View style={[styles.circle, origin?styles.selected: null]}/>
                <View style={[styles.bar]} />
                <View style={[styles.circle, destination?styles.selected: null]}/>
            </View>
            <View style={styles.content_input}>
                <View style={styles.input_wrapper}>
                    <TextInput
                        ref={firstInputRef}
                        placeholder='Entrer votre addresse'
                        placeholderTextColor={colors.WHITE}
                        style={styles.input}
                        onChangeText={setOrigin}
                    />
                    <Icon
                        name='search'
                        color={colors.WHITE}
                        size={30}
                    />
                </View>
                <View style={styles.input_wrapper}>
                    <TextInput
                        ref={secondInputRef}
                        placeholder='Entrer votre addresse'
                        placeholderTextColor={colors.WHITE}
                        style={styles.input}
                        onChangeText={setDestination}
                    />
                    <Icon
                        name='search'
                        color={colors.WHITE}
                        size={30}
                    />
                </View>
            </View>
        </View>
    );
};

//make this component available to the app
export default SearchBar;

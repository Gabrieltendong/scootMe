//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from '../../components/layout';

import { styles } from './style';

// create a component
const CGUScreen = ({navigation}) => {
    return (
        <Container navigation={navigation}  showBackButton={true}>
            <View style={styles.container}>
                <Text style={styles.title}>Conditions</Text>
                <Text style={styles.text_body}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s 
                    with the release of Letraset sheets containing 
                </Text>
            </View>
        </Container>
    );
};


//make this component available to the app
export default CGUScreen;

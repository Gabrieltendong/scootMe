//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';
import Button from '../../components/common/Button';
import Container from '../../components/layout/Container';

import { styles } from './style';

// create a component
const WelcomeScreen = ({navigation}) => {
    return (
        <Container>
            <View style={styles.container}>
                <Text style={styles.title_wrapper}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</Text>
                <Button 
                    style={styles.btn}
                    text='Creer un compte'
                />
                <Button 
                    style={styles.btn}
                    text='Creer un compte'
                    
                />
            </View>
        </Container>
    );
};

//make this component available to the app
export default WelcomeScreen;

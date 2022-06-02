//import liraries
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from '../../components/common';
import { Container } from '../../components/layout';

import { styles } from './style';

// create a component
const ContactScreen = ({navigation}) => {
    return (
        <Container navigation={navigation} showBackButton={true}>
            <View style={styles.container}>
                <Input
                    label="Votre question"
                    placeholder="laissez nous votre question"
                    style={styles.input}
                    multiline={true}
                    numberOfLines={10}
                />
                <Button
                    text="Soumettre"
                    style={styles.btn}
                />
            </View>
        </Container>
    );
};


//make this component available to the app
export default ContactScreen;

//import liraries
import React from 'react';
import { 
    View
} from 'react-native';
import { Button, Input } from '../../components/common';
import { Container } from '../../components/layout';

import { styles } from './style';

// create a component
const LoginScreen = ({navigation}) => {
    return (
        <Container 
            showBackButton={true}
            navigation={navigation}
        >
            <View style={styles.container}>
                <Input
                    label="Adresse email"
                    placeholder="test_Scootme@compte.fr"
                />
                <Input
                    label="Mot de passe"
                    placeholder="********************"
                    secureTextEntry={true}
                />
                <Button
                    text="Se connecter"
                    style = {styles.btn}
                    onPress= {() => navigation.navigate('Drawer')}
                />
            </View>
        </Container>
    );
};

//make this component available to the app
export default LoginScreen;

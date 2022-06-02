//import liraries
import React from 'react';
import { 
    View
} from 'react-native';
import { Button, Input } from '../../components/common';
import { Container } from '../../components/layout';

import { styles } from './style';

// create a component
const RegisterScreen = ({navigation}) => {
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
                <Input
                    label="Confirmer mot de passe"
                    placeholder="********************"
                    secureTextEntry={true}
                />
                <Button
                    text="S'inscrire"
                    style = {styles.btn}
                />
            </View>
        </Container>
    );
};

//make this component available to the app
export default RegisterScreen;

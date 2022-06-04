//import liraries
import React from 'react';
import { 
    View
} from 'react-native';
import { Button, Input } from '../../components/common';
import { Container } from '../../components/layout';

import { styles } from './style';

// create a component
const AdressScreen = ({navigation}) => {
    return (
        <Container 
            showBackButton={true}
            navigation={navigation}
        >
            <View style={styles.container}>
                <Input
                    label="Numero de telephone"
                    placeholder="06 75 78 57 26"
                    keyboardType={'number-pad'}
                />
                <Input
                    label="Adresse"
                    placeholder="43 rue de vilandry"
                    secureTextEntry={true}
                />
                <Button
                    text="Suivant"
                    style = {styles.btn}
                    onPress= {() => navigation.navigate('Drawer')}
                />
            </View>
        </Container>
    );
};

//make this component available to the app
export default AdressScreen;

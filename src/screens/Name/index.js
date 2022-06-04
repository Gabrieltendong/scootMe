//import liraries
import { Icon } from '@rneui/base';
import React from 'react';
import { 
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import { Button, Input } from '../../components/common';
import { Container } from '../../components/layout';
import { colors } from '../../styles';

import { styles } from './style';

// create a component
const NameScreen = ({navigation}) => {
    return (
        <Container 
            showBackButton={true}
            navigation={navigation}
        >
            <View style={styles.container}>
                <Input
                    label="Nom"
                    placeholder="Dupont"
                />
                <Input
                    label="Prenom"
                    placeholder="Jean"
                    secureTextEntry={true}
                />
                <View style={styles.row}>
                    <TouchableOpacity style={styles.btn_add}>
                        <Icon
                            name='add'
                            color={colors.WHITE}
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text_white}>Ajouter une photo de profil</Text>
                </View>
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
export default NameScreen;

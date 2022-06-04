//import liraries
import { Icon } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';
import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Button } from '../../components/common';
import InputEditing from '../../components/common/InputEditing';
import { colors } from '../../styles';

import { styles } from './style';

// create a component
const ProfilScreen = ({navigation}) => {

    const [showInput, setShowInput] = useState(false)

    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[colors.SKYBLUE, colors.PRIMARY]}
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={{paddingBottom: 40}}
                keyboardShouldPersistTaps='always'
            >
                <TouchableOpacity style={styles.avatar_wrapper}>
                    <Image
                        source={{uri: "https://talent2africa.com/wp-content/uploads/2019/12/Profil-RH-thegem-blog-default.jpg"}}
                        style={styles.avatar}
                    />
                    <TouchableOpacity style={styles.icon_editing}>
                        <Icon
                            name='edit'
                            color='#fff'
                            size={50}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
                <InputEditing 
                    label='Adresse E-mail'
                    defaultValue='test_ScootMe@compte.fr'
                    showInput={showInput}
                    onPress={() => setShowInput(true)}
                />
                <InputEditing 
                    label='Mot de passe'
                    defaultValue='*******************'
                    showInput={false}
                    secureTextEntry={true}
                />
                <InputEditing 
                    label='Nom Prenom'
                    defaultValue='Dupon Jean'
                    showInput={false}
                />
                <InputEditing 
                    label='Numero de telephone'
                    defaultValue='06 87 37 94 26'
                    showInput={false}
                />
                <InputEditing 
                    label='Adresse'
                    defaultValue='43 rue du vilandry'
                    showInput={false}
                />
                <InputEditing 
                    label='Coordonnées bancaire'
                    defaultValue='43 rue du vilandry'
                />
                <Button 
                    text='Accueil'
                    onPress = {() => navigation.goBack()}
                />
            </ScrollView>
        </LinearGradient>
    );
};


//make this component available to the app
export default ProfilScreen;

//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import { styles } from './style';

// create a component
const DrawerContent = ({navigation}) => {

    const openPage = (page) => {
        navigation.navigate(page)
        navigation.closeDrawer()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={{uri: "https://talent2africa.com/wp-content/uploads/2019/12/Profil-RH-thegem-blog-default.jpg"}}
                    style = {styles.avatar}
                />
            </View>
            <View style={styles.body}>
                <TouchableOpacity onPress={() => openPage('Profil')} style = {styles.btn_menu}>
                    <Text style={styles.text_btn}>Profil</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openPage('History')} style = {styles.btn_menu}>
                    <Text style={styles.text_btn}>Historique</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openPage('Contact')} style = {styles.btn_menu}>
                    <Text style={styles.text_btn}>Nous contacter</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openPage('LegalNotice')} style = {styles.btn_menu}>
                    <Text style={styles.text_btn}>Mentions légales</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openPage('CGU')} style = {styles.btn_menu}>
                    <Text style={styles.text_btn}>Conditions</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

//make this component available to the app
export default DrawerContent;

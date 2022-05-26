//import liraries
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './style'
import { colors } from '../../../styles';
import { Image, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';

// create a component
const Container = ({children, showBackButton, navigation}) => {
    return (
            <LinearGradient
                // Background Linear Gradient
                colors={[colors.SKYBLUE, colors.PRIMARY]}
                style={styles.container}
            >
                {
                    showBackButton && 
                    <TouchableOpacity style={styles.back_btn} onPress={() => navigation.goBack()}>
                        <Icon
                            name='chevron-back'
                            type='ionicon'
                            color={colors.WHITE}
                        />
                    </TouchableOpacity>
                }
                <Image 
                    source={require('../../../assets/images/logo.png')}
                    style={styles.logo_wrapper}
                    resizeMode='contain'
                />
                
                {children}
            </LinearGradient>
    );
};

//make this component available to the app
export default Container;

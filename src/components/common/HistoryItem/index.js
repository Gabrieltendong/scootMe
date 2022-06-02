//import liraries
import { AirbnbRating } from '@rneui/base';
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { colors } from '../../../styles';

import { styles } from './style';

// create a component
const HistoryItem = ({item, index}) => {

    return (
        <View key={index} style={styles.container}>
            <Image
                source={{uri: item.image}}
                style={styles.avatar}
            />
            <Text style={styles.title}>{item.name}</Text>
            <AirbnbRating 
                showRating={false}
                size={20}
                defaultRating={5}
                starContainerStyle={styles.rating}
                ratingBackgroundColor='transparent'
                ratingColor={colors.WHITE}
                selectedColor={colors.WHITE}
            />
            <View style={styles.row}>
                <Text style={styles.white_text}>{item.date}</Text>
                <Text style={styles.white_text}>Prix: {item.price}</Text>
            </View>
        </View>
    );
};

//make this component available to the app
export default HistoryItem;

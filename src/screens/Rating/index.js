//import liraries
import React from 'react';
import { View, Text } from 'react-native';
import { AirbnbRating } from '@rneui/base';
import { Button, Input } from '../../components/common';
import { Container } from '../../components/layout';

import { styles } from './style';
import { colors } from '../../styles';

// create a component
const RatingScreen = ({navigation}) => {
    return (
        <Container navigation={navigation} showBackButton={true}>
            <View style={styles.container}>
                <Input
                    label="Laissez un avis!"
                    placeholder="laissez un avis"
                    style={styles.input}
                    multiline={true}
                    numberOfLines={10}
                />
                <AirbnbRating 
                    showRating={false}
                    size={30}
                    defaultRating={5}
                    starContainerStyle={styles.rating}
                    ratingBackgroundColor='transparent'
                    ratingColor={colors.WHITE}
                    selectedColor={colors.WHITE}
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
export default RatingScreen;

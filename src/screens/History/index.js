//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { mockHistory } from '../../api/mockHistory';
import HistoryItem from '../../components/common/HistoryItem';
import { Container } from '../../components/layout';

import { styles } from './style';

// create a component
const HistoryScreen = ({navigation}) => {
    return (
        <Container navigation={navigation} showBackButton={true}>
            <FlatList
                data={mockHistory}
                renderItem={HistoryItem}
                style={styles.container}
                contentContainerStyle={styles.contentContainerStyle}
            />
        </Container>
    );
};


//make this component available to the app
export default HistoryScreen;

//import liraries
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
import SearchBar from '../../components/common/SearchBar';
import { colors } from '../../styles';
import { GOOGLE_MAPS_APIKEY } from '@env'

import { styles } from './style';

// create a component
const HomeScreen = ({navigation}) => {

    const origin = {latitude: 3.8641231861404557, longitude: 11.517385770862484};
    const destination = {latitude: 3.8710628738266126, longitude: 11.514567112739396};

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.menu_btn}
                    onPress={() => navigation.openDrawer()}
                >
                    <FontAwesome5
                        name='bars'
                        color={colors.WHITE}
                        size={30}
                    />
                </TouchableOpacity>
                <SearchBar />
            </View>
            <View style={styles.body}>
                <MapView
                    initialRegion={{
                        latitude: 3.8649950098552233,
                        longitude: 11.515970586039177,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    zoomEnabled={true}
                    minZoomLevel={18} 
                    style={styles.map} 
                >
                    <Marker 
                        coordinate={{
                            latitude: 3.864995009855,
                            longitude: 11.5159705860,
                        }} 
                    >
                        <FontAwesome5
                            name='motorcycle'
                            color={colors.PRIMARY}
                            size={40}
                        />
                    </Marker>
                    <Marker 
                        coordinate={{
                            latitude: 3.8658282434610975,
                            longitude: 11.51605495413198,
                        }} 
                    >
                        <FontAwesome5
                            name='motorcycle'
                            color={colors.PRIMARY}
                            size={40}
                        />
                    </Marker>
                    {/* <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                    /> */}
                </MapView>
            </View>
        </View>
    );
};

//make this component available to the app
export default HomeScreen;

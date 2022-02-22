import React from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
  return (
    <View>
        <StatusBar/>
        <Image source={require('../assets/jacket.jpg')} style={styles.image}/>
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Blue Jacket for sale</AppText>
            <AppText style={styles.price}>$100</AppText>
            <ListItem image={require('../assets/kakashi.jpg')} title='Kakashi Hatake'subTitle='5 Listings'/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    detailsContainer : {
        padding : 20
    },
    image : {
        width : '100%',
        height : 300,
    },
    price : {
        color : colors.secondary,
        fontWeight : 'bold',
        marginTop : 10,
        marginBottom : 30
    },
    title : {
        fontSize : 22,
        fontWeight : '600'
    }
});

export default ListingDetailsScreen;
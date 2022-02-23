import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import Icon from '../components/Icon';
import { ListItem } from '../components/lists';

function MyAccountScreen(props) {
  return (
    <View style={styles.screen}>
        <StatusBar/>
        <View style={[styles.container,{marginTop: 30}]}>
            <ListItem
                image={{uri : 'https://media-exp1.licdn.com/dms/image/C5603AQFtXhXrDx-sLQ/profile-displayphoto-shrink_200_200/0/1633698340226?e=1650499200&v=beta&t=tLI3uxrJAltajWwu4qDVWcFxkhthzAhrvApXAawcShc'}}
                title='Satyam Tewari'
                subTitle='satyamtewari13@gmail.com'
            />
        </View>
        <View style={[styles.container,{marginTop: 50}]}>
            <View style={[styles.itemHolder,{marginBottom: 20}]}>
                <Icon name='format-list-bulleted' color={colors.primary}/>
                <AppText>My Listings</AppText>
            </View>
            <View style={styles.itemHolder}>
                <Icon name='email' color={colors.secondary}/>
                <AppText>My Messages</AppText>
            </View>
        </View>
        <View style={[styles.container, {marginTop:20}]}>
            <View style={styles.itemHolder}>
                <Icon name='logout' color='yellow'/>
                <AppText>Log Out</AppText>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        padding : 10,
        backgroundColor : colors.white,
        width : '100%',
        alignSelf : 'baseline'
    },
    itemHolder : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    screen : {
        backgroundColor : colors.lightgrey,
        flex : 1
    }
});

export default MyAccountScreen;
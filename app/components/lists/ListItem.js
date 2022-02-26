import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ListItem(props) {
  return (
    <GestureHandlerRootView>
        <Swipeable renderRightActions={props.renderRightActions}>
            <TouchableHighlight onPress={props.onPress} underlayColor={colors.mediumgrey}>
                <View style={styles.ListItemContainer}>
                    <Image source={props.image} style={styles.image}/>
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{props.title}</AppText>
                        <AppText style={styles.subTitle} numberOfLines={2}>{props.subTitle}</AppText>
                    </View>
                    {props.showChevrons && <MaterialCommunityIcons name='chevron-right' size={20} color={colors.mediumgrey}/>}
                </View>
            </TouchableHighlight>
        </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    detailsContainer : {
        marginStart : 20,
        flex : 1
    },
    image : {
        width : 70,
        height : 70,
        borderRadius : 50,
        resizeMode : 'contain'
    },
    ListItemContainer : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    subTitle : {
        color : 'grey',
        marginTop : 5
    },
    title : {
        color : colors.black
    }
});

export default ListItem;
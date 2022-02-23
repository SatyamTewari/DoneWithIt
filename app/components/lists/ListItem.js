import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

function ListItem(props) {
  return (
    <GestureHandlerRootView>
        <Swipeable renderRightActions={props.renderRightActions}>
            <TouchableHighlight onPress={props.onPress} underlayColor={colors.mediumgrey}>
                <View style={styles.ListItemContainer}>
                    <Image source={props.image} style={styles.image}/>
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{props.title}</AppText>
                        <AppText style={styles.subTitle}>{props.subTitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    detailsContainer : {
        marginStart : 20
    },
    image : {
        width : 70,
        height : 70,
        borderRadius : 50,
        resizeMode : 'contain'
    },
    ListItemContainer : {
        flexDirection : 'row',
    },
    subTitle : {
        color : 'grey'
    },
    title : {
        color : colors.black
    }
});

export default ListItem;
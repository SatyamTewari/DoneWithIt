import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card(props) {
  return (
    <View style={styles.card}>
        <View style={styles.imageContainer}>
            <ImageBackground source={props.image} blurRadius={10} style={{flex : 1}}>
                <Image source={props.image} style={styles.image}/>
            </ImageBackground>
        </View>
        <View style={styles.detailContainer}>
            <AppText style={styles.title}>{props.title}</AppText>
            <AppText style={styles.subTitle}>{props.subTitle}</AppText>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
      borderRadius : 20,
      backgroundColor : colors.white,
      marginBottom : 20,
      overflow : 'hidden'
  },
  detailContainer : {
      padding : 20,
  },
  imageContainer: {
      width : '100%',
      height : 200,
  },
  image : {
      flex : 1,
      resizeMode : 'contain',
      alignSelf : 'center'
  },
  subTitle :{
      color : colors.secondary,
      fontWeight : 'bold'
  },
  title : {
      marginBottom : 7,
  }
});

export default Card;
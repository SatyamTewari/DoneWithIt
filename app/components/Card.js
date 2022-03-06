import React from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card({image, title, subTitle, onPress}) {
  return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <ImageBackground source={image} blurRadius={10} style={{flex : 1}}>
                        <Image source={image} style={styles.image}/>
                    </ImageBackground>
                </View>
                <View style={styles.detailContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
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
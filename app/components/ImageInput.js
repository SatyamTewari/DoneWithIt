import React, { useEffect } from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback, View, Alert } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker'

function ImageInput({imageUri, onChangeImage}) {
    const requestPermission = async() => {
        const result = await ImagePicker.requestCameraPermissionsAsync()
        if(!result.granted)
            alert('You need to enable permission to access images !!')
    }
    useEffect(()=>{requestPermission();},[])

    const handlePress = () => {
        if(!imageUri)
            selectImage();
        else
            Alert.alert('Delete', 'Are you sure you want to delete this image?', [
                {text : 'Yes', onPress: () => onChangeImage(null)},
                {text : 'No'}
            ])
    }
    const selectImage = async() => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            })
            if(!result.cancelled)
                onChangeImage(result.uri)
        } catch (error) {
            console.log('Error in loading image', error)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name='camera' size={40} color={colors.mediumgrey}/>}
                {imageUri && <Image source={{uri: imageUri}} style={styles.imageContainer}/>}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        backgroundColor : colors.lightgrey,
        borderRadius : 15,
        height : 100,
        justifyContent : 'center',
        overflow : 'hidden',
        width : 100
    },
    imageContainer : {
        width : '100%',
        height : '100%'
    }
});

export default ImageInput;
import React,{useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function CustomPicker({languagesList,icon,prompt}) {
    const [selectedLanguage,setSelectedLanguage] = useState()
    const pickerItems = languagesList.map((language)=>{
        return(
            <Picker.Item label={language} value={language} key={language}/>
        )
        });
    
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={icon} size={20} style={styles.icon} color={colors.mediumgrey}/>
            <Picker style={styles.picker}
                mode='dialog'
                prompt={prompt}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)
            }>
                {pickerItems}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.lightgrey,
        borderRadius : 25,
        flexDirection : 'row',
        paddingHorizontal : 15,
        paddingVertical : 5
    },
    icon : {
        alignSelf : 'center',
        margin : 10
    },
    picker : {
        width : '95%'
    }
});

export default CustomPicker;
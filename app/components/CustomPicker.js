import React,{useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useFormikContext } from 'formik';
import { ErrorMsg } from './forms';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function CustomPicker({name,itemsList,icon,prompt}) {
    const {errors, setFieldValue, touched, values} = useFormikContext()
    
    const pickerItems = itemsList.map((item)=>{
        return(
            <Picker.Item label={item.label} value={item} key={item.value}/>
        )
        });
    
    return (
        <>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size={20} style={styles.icon} color={colors.mediumgrey}/>}
                <Picker style={styles.picker}
                    mode='dialog'
                    prompt={prompt}
                    selectedValue={values[name]}
                    onValueChange={(itemValue) => {
                        setFieldValue(name,itemValue)
                        console.log(name,itemValue)
                    }
                }>
                    {pickerItems}
                </Picker>
            </View>
          <ErrorMsg error={errors[name]} visible={touched[name]}/>
        </>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.lightgrey,
        borderRadius : 25,
        flexDirection : 'row',
        paddingHorizontal : 15,
        paddingVertical : 5,
        marginVertical : 10
    },
    icon : {
        alignSelf : 'center',
        margin : 10
    },
    picker : {
        width : '95%',
        color : colors.mediumgrey
    }
});

export default CustomPicker;
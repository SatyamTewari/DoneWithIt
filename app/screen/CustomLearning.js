import React, {useState} from 'react';
import { View, StyleSheet, StatusBar, TextInput, Switch } from 'react-native';
import CustomPicker from '../components/CustomPicker';

const languagesList = ['Java','Python', 'JavaScript', 'Swift', 'C', 'C++', 'Golang']

function CustomLearning(props) {
    return (
    <View>
        <StatusBar/>
        {/* <CustomPicker icon='apps' languagesList={languagesList} prompt='Choose a Language'/> */}
    </View>
    );
}

const styles = StyleSheet.create({
    
});

export default CustomLearning;
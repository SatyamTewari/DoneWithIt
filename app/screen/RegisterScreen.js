import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from '../components/forms'

const validationSchema = Yup.object().shape({
    username : Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function RegisterScreen(props) {

    return (
        <View style={styles.container}>
            <StatusBar/>
            <AppForm
                initialValues={{username: '', email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField 
                    icon='account' 
                    placeholder='Name' 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    keyboardType='email-address'
                    name='username'/>
                <AppFormField 
                    icon='email' 
                    placeholder='Email' 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    keyboardType='email-address'
                    name='email'/>
                <AppFormField 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    icon='lock' 
                    placeholder='password'
                    secureTextEntry={true}
                    name='password'/>
                <SubmitButton title='Register'/>
            </AppForm>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal : 20,
      alignItems : 'center'
  },
  logo : {
      width : 80,
      height : 80,
      alignSelf : 'center',
      marginTop : 50,
      marginBottom : 20
  }
});

export default RegisterScreen;
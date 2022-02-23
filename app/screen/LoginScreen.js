import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from '../components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {

    return (
        <View style={styles.container}>
            <StatusBar/>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            {/* <Formik 
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                -- below commented out props code is not required since that is handled now via useFormikContext --
                {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <React.Fragment>
                        some components 
                    </React.Fragment>
                )}
            </Formik> */}
            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
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
                <SubmitButton title='Login'/>
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

export default LoginScreen;
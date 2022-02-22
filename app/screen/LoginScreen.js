import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import CustomButton from '../components';
import MyTextInput from '../components/MyTextInput';
import colors from '../config/colors';
import {Formik} from 'formik'

function LoginScreen(props) {

    return (
        <View style={styles.container}>
            <StatusBar/>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Formik 
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
            >
                {({handleChange, handleSubmit}) => (
                    <React.Fragment>
                        <MyTextInput 
                            icon='email' 
                            placeholder='Email' 
                            autoCapitalize='none' 
                            autoCorrect={false}
                            keyboardType='email-address'
                            onChangeText={handleChange('email')}/>
                        <MyTextInput 
                            autoCapitalize='none' 
                            autoCorrect={false}
                            icon='lock' 
                            placeholder='password'
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}/>
                        <CustomButton 
                            title='Login' 
                            buttonColor={colors.primary} 
                            buttonTitleColor={colors.white}
                            onPress={handleSubmit} />
                    </React.Fragment>
                )}
            </Formik>
            
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
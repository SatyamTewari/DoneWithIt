import React from 'react';
import { Image, ImageBackground,StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={10} source={require('../assets/background.jpg')} 
        style={styles.background}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <CustomButton title='login' 
                buttonColor={colors.primary} 
                buttonTitleColor={colors.white}
                onPress={()=>console.log('clicked')}/>
            <CustomButton title='Register' 
                buttonColor={colors.secondary} 
                buttonTitleColor={colors.white}
                onPress={()=>console.log('clicked')}/>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background : {
        flex : 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo:{
        width: 100,
        height: 100
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems:'center'
    }, 
    tagline: {
        fontSize : 25,
        fontWeight : '300',
        marginVertical : 20
    }
})

export default WelcomeScreen;
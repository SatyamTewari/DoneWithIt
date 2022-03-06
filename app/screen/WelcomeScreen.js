import React from 'react';
import { Image, ImageBackground,StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components';
import colors from '../config/colors';
import routes from '../navigation/routes';

function WelcomeScreen({navigation}) {
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
                onPress={()=> navigation.navigate(routes.LOGIN)}/>
            <CustomButton title='Register' 
                buttonColor={colors.secondary} 
                buttonTitleColor={colors.white}
                onPress={()=>navigation.navigate(routes.REGISTER)}/>
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
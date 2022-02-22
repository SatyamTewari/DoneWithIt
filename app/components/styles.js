import { StyleSheet } from 'react-native';
import colors from '../config/colors';

const styles = ({buttonColor,buttonTitleColor}) => StyleSheet.create({
    button : {
        width : 100,
        backgroundColor : buttonColor,
        borderRadius : 25,
        width : '90%',
        height : 40,
        justifyContent : 'center',
        marginVertical : 10
    },
    buttonTitle : {
        fontSize : 20,
        textAlign : 'center',
        textTransform : 'uppercase',
        color : buttonTitleColor
    }
})

export default styles;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {useFormikContext} from 'formik'
import CustomButton from '..';
import colors from '../../config/colors';


function SubmitButton({title}) {
    const {handleSubmit } = useFormikContext()

    return (
        <CustomButton
            title={title}
            buttonColor={colors.primary} 
            buttonTitleColor={colors.white}
            onPress={handleSubmit} />
    );
}

const styles = StyleSheet.create({
  container: {}
});

export default SubmitButton;
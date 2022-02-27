import React from 'react';
import MyTextInput from '../MyTextInput';
import ErrorMsg from './ErrorMsg';
import {useFormikContext } from 'formik'

function AppFormField({name, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext()

  return (
      <React.Fragment>
          <MyTextInput 
            onChangeText={handleChange(name)}
            onBlur={() => setFieldTouched(name)}
            {...otherProps}/>
          <ErrorMsg error={errors[name]} visible={touched[name]}/>
      </React.Fragment>
  );
}

export default AppFormField;
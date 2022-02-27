import React from 'react';
import ErrorMsg from './ErrorMsg'
import ImageInputList from '../ImageInputList';
import {useFormikContext } from 'formik'

function FormImagePicker({name}) {
    const {errors, setFieldValue, touched, values} = useFormikContext()
    const handleAdd = uri => {
        setFieldValue(name,[...values[name], uri])
      } 
      const handleRemove = uri => {
        setFieldValue(name, values[name].filter((imageUri) => uri !== imageUri))
      }

    return (
        <>
            <ImageInputList 
                imageUris={values[name]}
                onAddImage={handleAdd} 
                onRemoveImage={handleRemove}/>
            <ErrorMsg error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default FormImagePicker;
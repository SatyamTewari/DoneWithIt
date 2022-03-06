import CustomPicker from '../components/CustomPicker';
import { AppForm, AppFormField, FormImagePicker, SubmitButton } from '../components/forms';
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import * as Yup from 'yup';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1,"Please select atleast one image.")
})

const categories = [
    {label: 'Furniture', value: 1},
    {label: 'Clothing', value: 2},
    {label: 'Camera', value: 3}
]
function ListingEditScreen(props) {
    const location = useLocation();

    return (
        <View style={styles.container}>
            <StatusBar/>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: categories[0],
                    images: []
                }}
                onSubmit={(values) => console.log(values, location)}
                validationSchema={validationSchema}
            >
                <FormImagePicker 
                    name='images'/>
                <AppFormField 
                    placeholder='Title'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    name='title'
                    maxLength={255}/>
                <AppFormField 
                    placeholder='Price'
                    keyboardType='number-pad'
                    name='price'/>
                <CustomPicker
                    name='category'
                    itemsList={categories}
                    prompt='Please choose a Category' />
                <AppFormField 
                    placeholder='Description'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    name='description'
                    numberOfLines={3}
                    multiline={true}
                    maxLength={255}/>
                <View style={styles.buttonContainer}>
                    <SubmitButton title='Post'/>
                </View>    
            </AppForm>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal : 16,
    },
    buttonContainer : {
        width : '100%',
        alignItems : 'center'
    }
});

export default ListingEditScreen;
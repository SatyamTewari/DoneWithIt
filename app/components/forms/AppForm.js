import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet } from 'react-native';

function AppForm({initialValues, onSubmit, validationSchema, children}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                () => (
                    <React.Fragment>
                        {children}
                    </React.Fragment>
                )
            }
        </Formik>
    );
}

const styles = StyleSheet.create({
  container: {}
});

export default AppForm;
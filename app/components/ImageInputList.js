import React, { useRef } from 'react';
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris=[], onAddImage, onRemoveImage}) {
    const scrollView = useRef()

    return (
        <View>
            <ScrollView 
                ref={scrollView} 
                horizontal={true} 
                onContentSizeChange={()=>scrollView.current.scrollToEnd()}
                showsHorizontalScrollIndicator={false}>
                    <View style={styles.container}>
                        {imageUris.map(uri => 
                            <View style={styles.image} key={uri}>
                                <ImageInput 
                                    imageUri={uri} 
                                    onChangeImage={() => onRemoveImage(uri)}
                                />
                            </View>
                        )}
                        <ImageInput onChangeImage={uri => onAddImage(uri)}/>
                    </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        marginVertical : 10
    },
    image : {
        marginRight : 10
    }
});

export default ImageInputList;
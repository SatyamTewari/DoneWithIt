import React from 'react';
import { View, StyleSheet, StatusBar, FlatList } from 'react-native';
import Card from '../components/Card';
import { ListItemSeparator } from '../components/lists';
import colors from '../config/colors';
import routes from '../navigation/routes';

const listItems = [
    {
        id : 1,
        image : require('../assets/jacket.jpg'),
        title : 'Jacket for sale',
        subTitle : '$100'
    },
    {
        id : 2,
        image : require('../assets/sofa.jpg'),
        title : 'SOFA for sale',
        subTitle : '$500'
    },
    {
        id : 3,
        image : require('../assets/jacket.jpg'),
        title : 'Jacket for sale',
        subTitle : '$100'
    },
]

function ListingsScreen({navigation}) {

    return (
    <View style={styles.screen}>
        <StatusBar/>
        <FlatList style={{marginTop : 20}}
            data={listItems} 
            keyExtractor={m=>m.id.toString()}
            renderItem={
                ({item}) => <Card 
                    image={item.image} 
                    title={item.title} 
                    subTitle={item.subTitle} 
                    onPress={()=>navigation.navigate(routes.LISTINGDETAILS,item)}/>
            }
            ItemSeparatorComponent={ListItemSeparator}
            showsVerticalScrollIndicator = {false}
        >
        </FlatList>
    </View>
    );
}

const styles = StyleSheet.create({
    screen : {
        paddingHorizontal : 20,
        backgroundColor : colors.lightgrey
    }
});

export default ListingsScreen;
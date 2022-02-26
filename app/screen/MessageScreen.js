import React, {useState} from 'react';
import { View, StyleSheet, FlatList, StatusBar } from 'react-native';
import {ListItem, ListItemDeleteAction, ListItemSeparator} from '../components/lists'

const initialMessages = [
    {
        id : 1,
        title : 'Kakashi Hatake',
        description : 'Hey! Is this item still available?',
        image : require('../assets/kakashi.jpg')
    },
    {
        id : 2,
        title : 'Kakashi Hatake',
        description : 'I\'m interested in this item. When will you be able to post it?',
        image : require('../assets/kakashi.jpg')
    }
]

function MessageScreen(props) {
    const [messages,setMessages] = useState(initialMessages);
    const [resfreshing, setRefreshing] = useState(false)

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    }

  return (
    <View>
        <StatusBar/>
        <View style={{paddingHorizontal : 20, marginTop: 10}}>
            <FlatList
                data={messages} 
                keyExtractor={msg => msg.id.toString()}
                renderItem={ 
                    ({item,index}) =>  <ListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={()=>console.log('message item')}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                        showChevrons = {true}
                        />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={resfreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id : 3,
                            title : 'T3',
                            description : 'D3',
                            image : require('../assets/kakashi.jpg')
                        }])
                    }
                }
                showsVerticalScrollIndicator={false}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default MessageScreen;
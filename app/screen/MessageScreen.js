import React, {useState} from 'react';
import { View, StyleSheet, FlatList, StatusBar } from 'react-native';
import {ListItem, ListItemDeleteAction, ListItemSeparator} from '../components/lists'

const initialMessages = [
    {
        id : 1,
        title : 'T1',
        description : 'D1',
        image : require('../assets/kakashi.jpg')
    },
    {
        id : 2,
        title : 'T2',
        description : 'D2',
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
    <View style={{ flex: 1}}>
        <View style={{paddingHorizontal : 20, marginTop: 20, flex: 1}}>
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
                        }
                    ])
                }

                }
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default MessageScreen;
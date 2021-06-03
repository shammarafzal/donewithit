import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppListItemSwipeActions from '../components/AppListItemSwipeActions';
import AppListItemSeperator from '../components/AppListItemSeperator';
import colors from '../config/colors';
const initalMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/favicon.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/favicon.png')
    }
]
function MessagesScreen(props) {
    const [messages, setMessages] = useState(initalMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message => {
        setMessages(messages.filter(m=>m.id !== message.id)); 
    }
    return (
        <AppScreen>
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => <AppListItem 
            title = {item.title}
            subTitle = {item.description}
            image={item.image}
            onPress={()=> console.log('Message is', item)}
            renderRightActions={ ()=> <AppListItemSwipeActions 
            onPress={()=>handleDelete(item)}
            />}
            /> }
            ItemSeparatorComponent={() => <AppListItemSeperator></AppListItemSeperator>}
            refreshing={refreshing}
            onRefresh = {()=>{
                setMessages([
                    {
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/favicon.png')
                    }
                ])
            }}
        />
        </AppScreen>
    );
}

export default MessagesScreen;
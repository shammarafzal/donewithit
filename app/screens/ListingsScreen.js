import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppCard from '../components/AppCard';


import AppScreen from '../components/AppScreen';
import colors from '../config/colors';


const listings = [
    {
        id: 1,
        title: "Car",
        price: 100,
        image: require('../assets/background.jpg')
    },
    {
        id: 2,
        title: "Bike",
        price: 70,
        image: require('../assets/background.jpg')
    }
];

function ListingsScreen(props) {
    return (
        <AppScreen style={styles.screen}>
            <FlatList 
            data={listings}
            keyExtractor={listings => listings.id.toString()}
            renderItem={({ item }) => <AppCard 
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            />}
            />
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.lightGrey
    }
})
export default ListingsScreen;
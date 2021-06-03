import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors'
function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={50} color="white"/>
            </View>
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="delete" size={50} color="white"/>
            </View>
        <Image resizeMode="contain" style={styles.image} source={ require('../assets/background.jpg') }></Image>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
    backgroundColor: colors.black,
    flex: 1,
    },
    closeIcon:{
        position: 'absolute',
        top: 40,
        left: 40
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 40
    },
    image: {
        width: "100%",
        height: "100%" 
    }
})
export default ViewImageScreen;
import { bold } from 'chalk';
import React, { cloneElement } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native';

import colors from '../config/colors'
function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
            <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logoContainer: {
        position: "absolute",
        top: 100,
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
    },
    tagLine: {
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary
    }
})

export default WelcomeScreen;
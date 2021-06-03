import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
function LoginScreen(props) {
        const [email, setEmail] = useState();
        const [password, setPassword] = useState();
    return (
        <AppScreen style={styles.container}>
            <Image 
            style={styles.logo}
            source={require("../assets/logo.png")}/>
            <AppTextInput 
                autoCapitalize = "none"
                autoCorrect={false}
                keyboard="email-address"
                icon = "email"
                placeholder="Email"
                textContentType="emailAddress"
                onChangeText={text => setEmail(text)}
            />
            <AppTextInput 
                autoCapitalize = "none"
                autoCorrect={false}
                icon = "lock"
                placeholder="Password"
                textContentType="password"
                secureTextEntry
                onChangeText={text => setPassword(text)}
            />
            <AppButton title="Login" onPress= {()=>console.log(email, password)}/>
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }  
})
export default LoginScreen;
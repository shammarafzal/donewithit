import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup'
import AppScreen from '../components/AppScreen';
import { AppForm, AppFormField, AppSubmitButton} from '../components/forms';
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
    return (
        <AppScreen style={styles.container}>
            <Image 
            style={styles.logo}
            source={require("../assets/logo.png")}/>
            <AppForm initialValues={{email: '', password: ''}}
            onSubmit={values=>console.log(values)}
            validationSchema={validationSchema}
            > 
                    <AppFormField 
                        autoCapitalize = "none"
                        autoCorrect={false}
                        keyboard="email-address"
                        icon = "email"
                        placeholder="Email"
                        name="email"
                        textContentType="emailAddress"
                    />
                    <AppFormField 
                        autoCapitalize = "none"
                        autoCorrect={false}
                        icon = "lock"
                        placeholder="Password"
                        name = "password"
                        textContentType="password"
                        secureTextEntry
                    />
                    <AppSubmitButton title="Login"></AppSubmitButton>
            </AppForm>
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
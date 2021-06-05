import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import routes from "../components/navigation/routes";
function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
        <AppText style={styles.tagLine}>Sell What You Don't Need</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        ></AppButton>
        <AppButton
          title="Register"
          onPress={() => navigation.navigate(routes.REGISTER)}
          color="secondary"
        ></AppButton>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    marginTop: 10,
    color: "tomato",
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default WelcomeScreen;

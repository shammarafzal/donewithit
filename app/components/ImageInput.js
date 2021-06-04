import React, { useEffect } from "react";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access features");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    }
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      } else {
        Alert.alert("Delete", "Are you sure you want to delete this image?", [
          { text: "Yes", onPress: () => onChangeImage(null) },
          { text: "No" },
        ]);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.darkGrey}
            name="camera"
            size={50}
          />
        )}
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.image}></Image>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
export default ImageInput;

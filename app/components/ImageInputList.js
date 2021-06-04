import React from "react";
import { View, StyleSheet } from "react-native";

import ImageInput from "../components/ImageInput";
function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View style={styles.image}>
          <ImageInput imageUri={uri} key={uri} onChangeImage={uri} />
        </View>
      ))}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
export default ImageInputList;

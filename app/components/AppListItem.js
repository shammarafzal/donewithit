import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
function AppListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image}></Image>}
          <View style={styles.details}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.darkGrey}
          ></MaterialCommunityIcons>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  details: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.secondary,
  },
  title: {
    fontWeight: "500",
  },
});
export default AppListItem;

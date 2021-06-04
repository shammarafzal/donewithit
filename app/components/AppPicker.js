import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import AppScreen from "./AppScreen";
import PickerItem from "./PickerItem";
function AppPicker({
  icon,
  items,
  onSelectItem,
  numberOfColumns = 1,
  selectedItem,
  placeholder,
  PickerItemComponent = PickerItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.black}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.black}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <AppScreen>
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                label={item.label}
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              ></PickerItemComponent>
            )}
          ></FlatList>
        </AppScreen>
      </Modal>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    flex: 1,
    color: colors.darkGrey,
  },
  text: {
    flex: 1,
  },
});
export default AppPicker;

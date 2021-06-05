import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import AppIcon from "../components/AppIcon";

import AppListItem from "../components/AppListItem";
import AppListItemSeperator from "../components/AppListItemSeperator";
import AppScreen from "../components/AppScreen";
import routes from "../components/navigation/routes";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <AppListItem
          title="Ammar Afzal"
          subTitle="ammarafzal075@gmail.com"
          image={require("../assets/background.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItems.title}
          ItemSeparatorComponent={AppListItemSeperator}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>

      <AppListItem
        title="Logout"
        IconComponent={
          <AppIcon name="logout" backgroundColor="#ffe66d"></AppIcon>
        }
      />
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGrey,
  },
});
export default AccountScreen;

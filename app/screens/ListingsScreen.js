import React from "react";
import { FlatList, StyleSheet } from "react-native";
import AppCard from "../components/AppCard";

import AppScreen from "../components/AppScreen";
import colors from "../config/colors";
import routes from "../components/navigation/routes";
const listings = [
  {
    id: 1,
    title: "Car",
    price: 100,
    image: require("../assets/background.jpg"),
  },
  {
    id: 2,
    title: "Bike",
    price: 70,
    image: require("../assets/background.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});
export default ListingsScreen;

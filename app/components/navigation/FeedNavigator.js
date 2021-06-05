import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ListingDetailsScreen from "../../screens/ListingDetailsScreen";
import ListingsScreen from "../../screens/ListingsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen}></Stack.Screen>
    <Stack.Screen
      name="ListingsDetails"
      component={ListingDetailsScreen}
    ></Stack.Screen>
  </Stack.Navigator>
);
export default FeedNavigator;

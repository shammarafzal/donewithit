import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./app/components/navigation/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

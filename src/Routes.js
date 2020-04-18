import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/home/Home";
const Stack = createStackNavigator();

const screenOptions = {
  headerTitleAlign: "center",
  headerBackTitleVisible: true,
  headerStyle: {
    backgroundColor: "#000",
  },
  headerTintColor: "#FFF",
};

const Routes = () => {
  return (
    <NavigationContainer theme={{ colors: { background: "#000" } }}>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Covid BR" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

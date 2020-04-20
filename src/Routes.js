import React from "react";
import { StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Header from "./Components/header/Header";
import SidebarHeader from "./Components/header/SidebarHeader";

const Drawer = createDrawerNavigator();

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ccc",
    text: "#ccc",
    background: "#000",
    card: "#000",
  },
};

const Routes = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar barStyle="light-content" />
      <Drawer.Navigator
        initialRouteName="Home"
        edgeWidth={250}
        drawerStyle={{ width: 150 }}
        drawerContent={(props) => <SidebarHeader {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          initialParams={{ Header }}
        />
        <Drawer.Screen
          name="Sobre"
          component={About}
          initialParams={{ Header }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

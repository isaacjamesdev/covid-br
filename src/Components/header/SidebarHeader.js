import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const Img = styled.Image`
  width: 100%;
  align-self: center;
`;
const SidebarHeader = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Img source={require("../../../assets/icon.png")} width={50} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default SidebarHeader;

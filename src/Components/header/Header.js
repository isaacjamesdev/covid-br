import React from "react";
import { useIsDrawerOpen } from "@react-navigation/drawer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HeaderContainer, Text, MenuBtn } from "./Header.style";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = () => {
  const isOpenMenu = useIsDrawerOpen();
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <HeaderContainer>
      <TouchableOpacity
        hitSlop={{ top: 300, bottom: 300, left: 300, right: 300 }}
        onPress={navigation.openDrawer}
      >
        <MenuBtn open={isOpenMenu} />
      </TouchableOpacity>
      <Text> {route.name}</Text>
    </HeaderContainer>
  );
};

export default Header;

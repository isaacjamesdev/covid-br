import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const HeaderContainer = styled.View`
  height: 7%;
  background-color: #000;
  align-items: center;
  flex-direction: row;
  padding: 10px 15px;
`;

export const Text = styled.Text`
  color: #ccc;
  margin: auto auto;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  
`;

export const MenuBtn = styled(Feather).attrs((props) => ({
  name: props.open ? "x" : "menu",
  size: 25,
  color: "#ccc",
}))`
  /* margin-left: 5px; */
`;
// export const menuContainer = styled.View

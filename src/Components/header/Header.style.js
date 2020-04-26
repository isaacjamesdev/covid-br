import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const HeaderContainer = styled.View`
  height: 7%;
  background-color: #151b1e;
  align-items: center;
  flex-direction: row;
  padding: 10px 15px;
`;

export const Text = styled.Text`
  color: #bfbfbf;
  margin: auto auto;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  
`;

export const MenuBtn = styled(Feather).attrs((props) => ({
  name: props.open ? "x" : "menu",
  size: 25,
  color: "#bfbfbf",
}))`
  /* margin-left: 5px; */
`;
// export const menuContainer = styled.View

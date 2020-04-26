import styled from "styled-components/native";
import { FlatList } from "react-native";

export const BoxContainer = styled.View`
  padding: 0 5px;
  background-color: #000;
  border: 0.4px solid #999;
  border-radius: 10px;
  width: 90%;
  margin: 10px auto;
`;

export const Text = styled.Text`
  color: #999;
  font-size: 18px;
  font-size: ${(props) => (props.className === "selected" ? "20px" : "18px")};

  font-weight: ${(props) =>
    props.className === "selected" ? "bold" : "normal"};
`;

export const HorizontalLine = styled.View`
  border: 0.25px solid white;
  height: 0;
  opacity: 0.2;
`;

export const List = styled(FlatList)`
  display: ${(props) => (props.className === "active" ? "flex" : "none")};
  padding: 5px 10px;
  max-height: 90%;
  background-color: #282828;
  min-width: 75%;
  align-self: center;
  margin-bottom: 20px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 5px;
`;

export const Img = styled.Image`
  background-color: #999;
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

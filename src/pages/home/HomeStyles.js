import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { FlatList } from "react-native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const HorizontalLine = styled.View`
  margin: 15px;
  border: 0.3px solid #282828;
  height: 0;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 6px 0;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: #7159c1;
  border-radius: 50px;
  margin-left: 10px;
  padding: 0 10px;
  opacity: ${(props) => (props.enabled || props.loading ? 1.0 : 0.6)};
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  padding: 5px;
`;

export const ContainerText = styled.View`
  background-color: #151b1e;
  border: 0.4px solid #bfbfbf;
  border-radius: 10px;
  width: 90%;
  margin: 10px auto;
  height: 40px;
`;

export const Text = styled.Text`
  color: #bfbfbf;
  font-size: 18px;
  margin: auto auto;
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
  color: #bfbfbf;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: #bfbfbf;
  padding: 5px 15px 0 15px;
  font-style: italic;
`;

import styled from "styled-components/native";

export const DropdownContainer = styled.View`
  padding: 0 5px;
  background-color: #000;
  border: 0.4px solid #ccc;
  border-radius: 10px;
  width: 90%;
  margin: 10px auto;
  /* justify-content: space-around;
  flex-direction: row; */
`;

export const Text = styled.Text`
  align-self: center;
  color: #fff;
  font-size: 18px;
  margin: 6px 0;
`;

export const MyPicker = styled.Picker`
  background-color: #000;
  margin: 3px 0;
`;

export const IconContainer = styled.View`
  position: absolute;
  top: 18px;
  left: 250px;
`;

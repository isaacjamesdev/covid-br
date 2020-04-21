import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
`;
export const LogoContainer = styled.View`
  margin: auto 0;
  padding: 20px;
`;
export const InfoContainer = styled.View`
  align-items: center;
  padding: 10px 15px;
`;

export const TextHeader = styled.Text`
  color: #999;
  font-size: 18;
  margin: 10px auto 0 auto;
  font-weight: bold;
`;

export const TextBody = styled.Text`
  color: #999;
  font-size: 16;
  margin: 10px 0;
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;
export const ContactIconDiv = styled.View`
  margin: auto 3px;
`;

export const ContactContainer = styled.View`
  flex-direction: row;
  align-self: flex-start;
  margin: -5px 0;
  font-synthesis
`;

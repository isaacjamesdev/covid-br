import React from "react";
import {
  Container,
  LogoContainer,
  Logo,
  InfoContainer,
  TextHeader,
  TextBody,
} from "./About.style";

const About = ({ route }) => {
  const { Header } = route.params;
  return (
    <Container>
      {Header && <Header />}
      <LogoContainer>
        <Logo source={require("../../../assets/icon.png")} width={50} />
      </LogoContainer>
      <InfoContainer>
        <TextHeader>Covid BR – Status da pandemia no Brasil</TextHeader>
        <TextBody>Versão: 1.0.0</TextBody>

        <TextHeader>Agradecimentos:</TextHeader>
        <TextBody>
          Equipe que disponibiliza a API covid19-brazil-api.now.sh/
        </TextBody>
        <TextBody>
          Toda a comunidade de desenvolvedores, em especial React, e amigos que
          contribuíram direta e indiretamente para os meus conhecimentos.
        </TextBody>
        <TextHeader>Contato:</TextHeader>
        <TextBody>Email: isaacjamesdev@gmail.com</TextBody>
        <TextBody>Linkedin:.linkedin.com/in/isaacjamesdev/</TextBody>
      </InfoContainer>
    </Container>
  );
};

export default About;

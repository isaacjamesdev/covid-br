import React from "react";
import {
  Container,
  LogoContainer,
  Logo,
  InfoContainer,
  TextHeader,
  TextBody,
  ContactContainer,
  ContactIconDiv,
} from "./About.style";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { HorizontalLine } from "../../Components/common/HorizontalLine";

const About = ({ route }) => {
  const { Header } = route.params;
  return (
    <Container>
      {Header && <Header />}
      <LogoContainer>
        <Logo source={require("../../../assets/icon.png")} width={50} />
      </LogoContainer>
      <InfoContainer>
        <TextHeader>Desenvolvido por:</TextHeader>
        <TextBody>Isaac James - Engenheiro de software</TextBody>
        <HorizontalLine />
        <TextHeader>Covid-19 Brasil – Status da pandemia no Brasil</TextHeader>
        <TextBody>Versão: 1.0.0</TextBody>
        <HorizontalLine />
        <TextHeader>Agradecimentos:</TextHeader>
        <TextBody>
          Equipe que disponibiliza a API covid19-brazil-api.now.sh/
        </TextBody>
        <TextBody>
          Toda a comunidade de desenvolvedores, em especial comunidade React,
          amigos que contribuíram direta e indiretamente para os meus
          conhecimentos.
        </TextBody>

        <TextHeader>Contato:</TextHeader>
        <ContactContainer>
          <ContactIconDiv>
            <MaterialIcons name="email" size={20} color="#bfbfbf" />
          </ContactIconDiv>
          <TextBody italic>isaacjamesdev@gmail.com</TextBody>
        </ContactContainer>
        <ContactContainer>
          <ContactIconDiv>
            <AntDesign name="linkedin-square" size={20} color="#bfbfbf" />
          </ContactIconDiv>
          <TextBody italic>linkedin.com/in/isaacjamesdev/</TextBody>
        </ContactContainer>
      </InfoContainer>
    </Container>
  );
};

export default About;

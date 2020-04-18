import React from "react";
import { Container, InfoContainer, Text } from "./InfoCard.style";
import Status from "../Status/Status";
import { STATUS, COLORS } from "../../constans/covidConsntants";

const InfoCard = ({data}) => {
  const renderInformation = (status, info, color) => (
    <InfoContainer>
      <Text>{status}</Text>
      <Status info={info} color={color} />
    </InfoContainer>
  );
  return (
    <Container>
      {renderInformation(STATUS.CONFIRMADOS, data.confirmados, COLORS.YELLOW)}
      {renderInformation(STATUS.SUSPEITOS, data.suspeitos, COLORS.GRAY)}
      {renderInformation(STATUS.CURADOS, data.curados, COLORS.GREEN)}
      {renderInformation(STATUS.MORTES, data.mortes, COLORS.RED)}
    </Container>
  );
};

export default InfoCard;

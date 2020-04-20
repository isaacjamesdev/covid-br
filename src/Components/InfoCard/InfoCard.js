import React from "react";
import { Container, InfoContainer, Text } from "./InfoCard.style";
import Status from "../Status/Status";
import { STATUS, COLORS, TYPES } from "../../constans/covidConsntants";
import { emptyOrNull } from "../../utils/stringUtil";

const InfoCard = ({ data = {}, type }) => {
  const formatedData =
    type === TYPES.COUNTRY
      ? {
          cases: data.confirmed,
          refuses: data.recovered,
          deaths: data.deaths,
        }
      : data;

  const renderInformation = (status, info, color) => (
    <InfoContainer>
      <Text>{emptyOrNull(status)}</Text>
      <Status info={info} color={color} />
    </InfoContainer>
  );
  return (
    <Container>
      {renderInformation(STATUS.CONFIRMADOS, formatedData.cases, COLORS.YELLOW)}
      {formatedData.suspects
        ? renderInformation(
            STATUS.SUSPEITOS,
            formatedData.suspects,
            COLORS.GRAY
          )
        : null}
      {renderInformation(STATUS.CURADOS, formatedData.refuses, COLORS.GREEN)}
      {renderInformation(STATUS.MORTES, formatedData.deaths, COLORS.RED)}
    </Container>
  );
};

export default InfoCard;

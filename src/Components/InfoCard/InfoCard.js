import React from "react";
import { View } from "react-native";
import { Container, InfoContainer, Text } from "./InfoCard.style";
import Status from "../Status/Status";
import { STATUS, COLORS, TYPES } from "../../constans/covidConsntants";
import { emptyOrNull } from "../../utils/stringUtil";
import { HorizontalLine } from "../common/HorizontalLine";

const InfoCard = ({ data = {}, type }) => {
  const formatedData =
    type === TYPES.COUNTRY
      ? {
          cases: data.confirmed,
          refuses: data.recovered,
          deaths: data.deaths,
        }
      : data;

  const renderInformation = (status, info, color, iconName) => (
    <View>
      <InfoContainer>
        <Text>{emptyOrNull(status)}</Text>
        <Status info={info} color={color} iconName={iconName} />
      </InfoContainer>
      <HorizontalLine />
    </View>
  );
  return (
    <Container>
      {renderInformation(
        STATUS.CONFIRMADOS,
        formatedData.cases,
        COLORS.YELLOW,
        "hospital"
      )}
      {formatedData.suspects
        ? renderInformation(
            STATUS.SUSPEITOS,
            formatedData.suspects,
            COLORS.GRAY,
            "microscope"
          )
        : null}
      {renderInformation(
        STATUS.CURADOS,
        formatedData.refuses,
        COLORS.GREEN,
        "heart"
      )}
      {renderInformation(
        STATUS.MORTES,
        formatedData.deaths,
        COLORS.RED,
        "skull"
      )}
    </Container>
  );
};

export default InfoCard;

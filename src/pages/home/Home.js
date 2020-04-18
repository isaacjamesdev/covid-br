import React from "react";
import { Container, HorizontalLine } from "./HomeStyles";
import InfoCard from "../../Components/InfoCard/InfoCard";
import Dropdown from "../../Components/Dropdown/Dropdown";

const Home = ({ navigation }) => {
  const dataBrasil = {
    confirmados: 123,
    curados: 432,
    suspeitos: 43,
    mortes: 666,
  };

  const dataCeara = {
    confirmados: 23,
    curados: 42,
    suspeitos: 3,
    mortes: 0,
  };

  return (
    <Container>
      <Dropdown selected="Ceará" />
      <InfoCard data={dataCeara} />

      <HorizontalLine />

      <Dropdown selected="Brasil" />
      <InfoCard data={dataBrasil} />
    </Container>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Container, HorizontalLine, Text, ContainerText } from "./HomeStyles";
import { getAllStateBrazilData, getCountryData } from "../../API/covidApi";
import { TYPES } from "../../constans/covidConsntants";
import DropdownStates from "../../Components/Dropdown/Dropdown";
import InfoCard from "../../Components/InfoCard/InfoCard";

const Home = ({ navigation, route }) => {
  const [dataBrazil, setDataBrazil] = useState({});
  const [dataStates, setDataStates] = useState([]);
  const [selectedState, setSelectedState] = useState({});
  const { Header } = route.params;

  useEffect(() => {
    Promise.all([getAllStateBrazilData(), getCountryData("brazil")]).then(
      ([statesData, countryData]) => {
        setDataStates(statesData.sort((a, b) => a.state - b.state));
        setSelectedState(statesData[4]);
        setDataBrazil(countryData);
      }
    );
  }, []);

  const onSelect = (index) => {
    setSelectedState({ ...dataStates[index] });
  };

  return (
    <Container>
      {Header && <Header />}
      <DropdownStates
        selected={selectedState}
        items={dataStates}
        onSelectedItem={onSelect}
      />
      <InfoCard data={selectedState} />
      {/* <Text>Última atualização: {selectedState.datetime}</Text> */}

      <HorizontalLine />
      <ContainerText>
        <Text onPress={() => navigation.openDrawer()}>Situação no Brasil</Text>
      </ContainerText>
      <InfoCard data={dataBrazil} type={TYPES.COUNTRY} />

      {/* <Text>Última atualização: {dataBrazil.updated_at}</Text> */}
    </Container>
  );
};

export default Home;

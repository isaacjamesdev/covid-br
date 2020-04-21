import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import {
  Container,
  HorizontalLine,
  Text,
  ContainerText,
  InfoText,
} from "./HomeStyles";
import { getAllStateBrazilData, getCountryData } from "../../API/covidApi";
import { TYPES } from "../../constans/covidConsntants";
import DropdownStates from "../../Components/Dropdown/Dropdown";
import InfoCard from "../../Components/InfoCard/InfoCard";

const Home = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const [dataBrazil, setDataBrazil] = useState({});
  const [dataStates, setDataStates] = useState([]);
  const [selectedState, setSelectedState] = useState({});
  const { Header } = route.params;

  useEffect(() => {
    Promise.all([getAllStateBrazilData(), getCountryData("brazil")])
      .then(([statesData, countryData]) => {
        setDataStates(statesData.sort((a, b) => a.state - b.state));
        setTimeout(() => {
          setSelectedState(statesData[0]);
          setLoading(false);
        }, 100);
        setDataBrazil(countryData);
      })
      .catch(() => setLoading(false));
  }, []);

  const onSelect = (index) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedState({ ...dataStates[index] });
      setLoading(false);
    }, 150);
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    const dataFormat = newDate.toLocaleDateString();
    const timeFormat = `${newDate.toLocaleTimeString().split(":")[0]}:${
      newDate.toLocaleTimeString().split(":")[1]
    } `;

    return `${dataFormat} às ${timeFormat}`;
  };

  const getDate = (isCountry) =>
    !isCountry && dataStates.length
      ? formatDate(dataStates[0].datetime)
      : formatDate(dataBrazil.updated_at);

  return (
    <Container>
      {Header && <Header />}
      <DropdownStates
        selected={selectedState}
        items={dataStates}
        onSelectedItem={onSelect}
      />
      <InfoCard data={selectedState} />

      <InfoText>Atualizado em: {getDate()}</InfoText>
      <HorizontalLine />

      {loading && <ActivityIndicator size="large" color="#999" />}

      <ContainerText>
        <Text onPress={() => navigation.openDrawer()}>Situação no Brasil</Text>
      </ContainerText>
      <InfoCard data={dataBrazil} type={TYPES.COUNTRY} />
      <InfoText>Atualizado em: {getDate(true)}</InfoText>
      <HorizontalLine />
      <InfoText style={{ alignSelf: "center", fontSize: 13 }}>
        Fonte: covid19-brazil-api-docs.now.sh/
      </InfoText>
    </Container>
  );
};

export default Home;

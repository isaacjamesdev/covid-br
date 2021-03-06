import React, { useState, useEffect } from "react";
import { Container, Text, ContainerText, InfoText } from "./HomeStyles";
import { getAllStateBrazilData, getCountryData } from "../../API/covidApi";
import { TYPES } from "../../constans/covidConsntants";
import Dropdown from "../../Components/Dropdown/Dropdown";
import InfoCard from "../../Components/InfoCard/InfoCard";
import { HorizontalLine } from "../../Components/common/HorizontalLine";
import { View } from "react-native";

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

  const onSelect = (item) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedState(item);
      setLoading(false);
    }, 100);
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
      <Dropdown
        selected={selectedState}
        items={dataStates}
        onSelectedItem={onSelect}
        loading={loading}
      />

      <InfoCard data={selectedState} />

      <InfoText style={{ marginBottom: 5 }}>
        Atualizado em: {getDate()}
      </InfoText>
      {/* <HorizontalLine /> */}

      <ContainerText>
        <Text onPress={() => navigation.openDrawer()}>Situação no Brasil</Text>
      </ContainerText>
      <InfoCard data={dataBrazil} type={TYPES.COUNTRY} />
      <InfoText style={{ marginBottom: 5 }}>
        Atualizado em: {getDate(true)}
      </InfoText>
      {/* <HorizontalLine /> */}
      <View
        style={{
          marginTop: 40,
        }}
      >
        <InfoText
          style={{
            alignSelf: "center",
            fontSize: 13,
          }}
        >
          Fonte: covid19-brazil-api-docs.now.sh/
        </InfoText>
      </View>
    </Container>
  );
};

export default Home;

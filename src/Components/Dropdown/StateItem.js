import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Img, Text, ItemContainer, HorizontalLine } from "./Dropdown.style";
import { getUriImage } from "../../API/covidApi";

const StateItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View>
        <ItemContainer>
          <Text>{item.state}</Text>
          <Img
            source={{
              uri: getUriImage(item.uf),
            }}
          />
        </ItemContainer>
        <HorizontalLine />
      </View>
    </TouchableOpacity>
  );
};

export default StateItem;

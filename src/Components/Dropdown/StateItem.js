import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Img, Text, ItemContainer } from "./Dropdown.style";
import { getUriImage } from "../../API/covidApi";
import { HorizontalLine } from "../common/HorizontalLine";

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

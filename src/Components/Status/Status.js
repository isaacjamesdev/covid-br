import React from "react";
import { FontAwesome5,  } from "@expo/vector-icons";
import { Text } from "./Status.styled";
import { emptyOrNull } from "../../utils/stringUtil";

const Status = ({ info, color, iconName }) => {
  return (
    <Text>
      {emptyOrNull(info)}{" "}
      <FontAwesome5 name={iconName} size={18} color={color} solid />
    </Text>
  );
};
export default Status;

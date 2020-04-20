import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "./Status.styled";
import { emptyOrNull } from "../../utils/stringUtil";

const Status = ({ info, color }) => {
  return (
    <Text>
      {emptyOrNull(info)}{" "}
      <MaterialCommunityIcons name="cube-outline" size={18} color={color} />
    </Text>
  );
};

export default Status;

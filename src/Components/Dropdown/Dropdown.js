import React from "react";
import { DropdownContainer, Text } from "./Dropdown.style";

const Dropdown = ({ selected }) => {
  return (
    <DropdownContainer>
      <Text>{selected}</Text>
    </DropdownContainer>
  );
};

export default Dropdown;

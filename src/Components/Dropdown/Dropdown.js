import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { DropdownContainer, MyPicker, IconContainer } from "./Dropdown.style";

const DropdownStates = ({ selected, items = [], onSelectedItem }) => {
  return (
    <DropdownContainer>
      <MyPicker
        selectedValue={selected}
        onValueChange={(itemValueIndex) => onSelectedItem(itemValueIndex)}
        mode="dropdown"
      >
        {selected.state && (
          <MyPicker.Item color="#999" label={selected.state} />
        )}
        {items.map(
          (item, idx) =>
            item.uid !== selected.uid && (
              <MyPicker.Item key={idx} label={item.state} value={idx} />
            )
        )}
      </MyPicker>
      <IconContainer>
        <AntDesign name="downcircleo" size={20} color="#999" />
      </IconContainer>
    </DropdownContainer>
  );
};

export default DropdownStates;

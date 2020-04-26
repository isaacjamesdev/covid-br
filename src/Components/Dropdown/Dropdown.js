import React, { useMemo } from "react";
import { View, TouchableOpacity, TouchableHighlight } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BoxContainer, List, Text, ItemContainer } from "./Dropdown.style";
import Modal from "../modal/Modal";
import StateItem from "./StateItem";
import useToggle from "../../hooks/UseToggle";
import { ActivityIndicator } from "react-native";

const Dropdown = ({ selected, items = [], onSelectedItem, loading }) => {
  const [showModal, toggleShowModal] = useToggle(false);

  const onSelect = (item) => {
    onSelectedItem(item);
    toggleShowModal();
  };

  const MemoList = useMemo(
    () =>
      items.length ? (
        <List
          className={showModal ? "active" : ""}
          data={items}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => (
            <StateItem item={item} onPress={onSelect} />
          )}
        />
      ) : null,
    [items, showModal]
  );

  return (
    <View>
      <BoxContainer>
        <TouchableOpacity onPress={toggleShowModal} disabled={loading}>
          <ItemContainer>
            <Text>{selected.state}</Text>
            <View>
              {loading ? (
                <ActivityIndicator color="#bfbfbf" />
              ) : (
                <AntDesign name="downcircleo" size={20} color="#bfbfbf" />
              )}
            </View>
          </ItemContainer>
        </TouchableOpacity>
      </BoxContainer>

      <View>
        <Modal show={showModal}>
          <ItemContainer>
            <Text className="selected">Selecione um estado</Text>
            <TouchableOpacity
              onPress={toggleShowModal}
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
              <View>
                <AntDesign name="closecircleo" size={20} color="#bfbfbf" />
              </View>
            </TouchableOpacity>
          </ItemContainer>
          {MemoList}
        </Modal>
      </View>
    </View>
  );
};

export default Dropdown;

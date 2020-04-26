import React from "react";
import { Modal as ModalReact, StyleSheet, View } from "react-native";

const Modal = ({ children, show, ...props }) => {
  return (
    <ModalReact
      {...props}
      animationType="slide"
      transparent={true}
      visible={show}
      hardwareAccelerated={true}
    >
      <View onb style={styles.modalView}>
        {children}
      </View>
    </ModalReact>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    opacity: 0.9,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: "auto",
    maxHeight: "80%",
    marginBottom: "auto",
  },
});

export default Modal;

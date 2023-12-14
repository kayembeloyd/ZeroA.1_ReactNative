import React from "react";
import { Modal, Text, View } from "react-native";
import { CustomColor } from "../assets/colors/Color";

export default function CustomDialog({ contentComponent, visible }) {
  return (
    <Modal visible={visible} transparent>
      <View // Dark background container
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          position: "absolute",
          opacity: 0.7,
        }}
      ></View>

      <View // Content container
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {contentComponent}
      </View>
    </Modal>
  );
}

import React from "react";
import { Text } from "react-native";

export default function CustomText({ children, style }) {
  // Default font size 14
  return (
    <Text
      style={{
        ...style,
        fontFamily: "InterRegular",
        textAlignVertical: "center",
      }}
    >
      {children}
    </Text>
  );
}

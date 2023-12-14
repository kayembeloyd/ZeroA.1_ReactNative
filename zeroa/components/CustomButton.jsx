import React from "react";
import { Text, View } from "react-native";
import Icons from "../assets/icons/Icons";

export default function CustomButton({
  titleColor,
  endIconName,
  startIconName,
}) {
  return (
    <View // Button Container
      style={{
        paddingHorizontal: 24,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 100,
        borderColor: titleColor ? titleColor : "#000",
        borderWidth: 1,
        gap: 8,
        minHeight: 40,
      }}
    >
      {startIconName ? (
        <Icons name={startIconName} color={titleColor ? titleColor : "#000"} />
      ) : null}

      <Text style={{ fontFamily: "InterMedium", fontSize: 15 }}>
        More filters
      </Text>

      {endIconName ? (
        <Icons name={endIconName} color={titleColor ? titleColor : "#000"} />
      ) : null}
    </View>
  );
}

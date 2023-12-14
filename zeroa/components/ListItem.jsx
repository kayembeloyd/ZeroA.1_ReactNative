import React from "react";
import { Text, View } from "react-native";
import { CustomColor } from "../assets/colors/Color";
import CustomText from "./CustomText";
import Icons from "../assets/icons/Icons";
import CustomButton from "./CustomButton";

export default function ListItem({
  title,
  color,
  style,
  endIconName,
  endButton,
}) {
  return (
    <View // List itemContainer
      style={[
        style,
        {
          height: 48,
          width: "100%",
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      ]}
    >
      <Text
        style={{
          fontFamily: "InterSemi",
          fontSize: 15,
          color: color ? color : "#000",
        }}
      >
        Filters
      </Text>

      {endIconName ? (
        <Icons name={"ic_down"} color={color ? color : "#000"} />
      ) : null}

      {endButton ? endButton : null}
    </View>
  );
}

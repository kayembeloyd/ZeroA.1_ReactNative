import React from "react";
import { Text, View } from "react-native";
import { CustomColor } from "../assets/colors/Color";
import Icons from "../assets/icons/Icons";
import CustomText from "./CustomText";

export default function CustomTopAppBar({
  style,
  title,
  titleColor,
  leadingOptions,
  trailingOptions,
}) {
  return (
    <View //TopAppBar
      style={{
        height: 64,
        width: "100%",
        backgroundColor: style
          ? style.backgroundColor
            ? style.backgroundColor
            : CustomColor.Primary
          : CustomColor.Primary,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View // Leading Icons Container
        style={{ flexDirection: "row" }}
      >
        {leadingOptions?.map((option) => {
          return (
            <Icons
              key={option.name}
              style={{ height: 48, width: 48 }}
              name={option.name ? option.name : "ic_icon_error"}
              color={CustomColor.OnPrimary}
            />
          );
        })}
      </View>

      <Text // Title
        style={{
          fontFamily: "InterMedium",
          fontSize: 18,
          color: CustomColor.OnPrimary,
          flex: 1,
          marginLeft: leadingOptions ? 16 : 10,
        }}
      >
        {title}
      </Text>

      <View // Trailing Icons Container
        style={{ flexDirection: "row" }}
      >
        {trailingOptions?.map((option) => {
          return (
            <Icons
              key={option.name}
              style={{ height: 48, width: 48 }}
              name={option.name ? option.name : "ic_icon_error"}
              color={CustomColor.OnPrimary}
            />
          );
        })}
      </View>
    </View>
  );
}

import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import Icons from "../assets/icons/Icons";
import { CustomColor } from "../assets/colors/Color";

export default function CustomChip({
  style,
  uneditableText,
  text,
  icons,
  onPress,
}) {
  return (
    <TouchableOpacity // Chip container
      style={[
        style,
        {
          flexDirection: "row",
          paddingHorizontal: 16,
          paddingVertical: 4,
          gap: 6,
          borderRadius: 8,
          alignItems: "center",
          backgroundColor: style.backgroundColor
            ? style.backgroundColor
            : CustomColor.Primary,
          minHeight: 32,
        },
      ]}
      onPress={onPress}
    >
      {uneditableText ? (
        <Text
          style={{
            fontFamily: "InterRegular",
            fontSize: 14,
            color: CustomColor.OnPrimary,
            opacity: 0.7,
          }}
        >
          {uneditableText}
        </Text>
      ) : null}
      {text ? (
        <Text
          style={{
            fontFamily: "InterRegular",
            fontSize: 14,
            color: CustomColor.OnPrimary,
          }}
        >
          {text}
        </Text>
      ) : null}

      {icons?.map((icon) => {
        return (
          <Icons
            key={icon.name}
            name={icon.name}
            color={CustomColor.OnPrimary}
          />
        );
      })}
    </TouchableOpacity>
  );
}

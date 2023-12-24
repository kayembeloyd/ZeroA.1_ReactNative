import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import Icons from "../assets/icons/Icons";
import { CustomColor } from "../assets/colors/Color";
import CustomDialog from "./CustomDialog";
import KeypadDialogContent from "./KeypadDialogContent";

export default function CustomChip({
  style,
  uneditableText,
  text,
  icons,
  onPress,
  onSubmitData,
  showDialog,
}) {
  // Data layer
  const [numPadDialogVisibity, setNumPadDialogVisibity] = useState(false);

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
      onPress={
        showDialog
          ? () => {
              setNumPadDialogVisibity(true);
            }
          : onPress
          ? onPress
          : null
      }
    >
      <CustomDialog
        visible={numPadDialogVisibity}
        contentComponent={
          <KeypadDialogContent
            inputTitle={uneditableText}
            initialValue={text}
            onDonePress={(numPadValue) => {
              setNumPadDialogVisibity(false);
              onSubmitData ? onSubmitData(numPadValue) : null;
            }}
          />
        }
      />

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

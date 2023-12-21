import React, { useState } from "react";
import { Text, View } from "react-native";
import { CustomColor } from "../assets/colors/Color";
import Icons from "../assets/icons/Icons";
import CustomButton from "./CustomButton";
import { TouchableOpacity } from "react-native";

export default function KeypadDialogContent({
  inputTitle,
  initialValue,
  onDonePress,
}) {
  const [numPadValue, setNumPadValue] = useState(
    initialValue ? String(initialValue) : "0"
  );

  const numKeyRows = [
    [
      {
        id: 1,
        topLeftRadius: true,
        topRightRadius: false,
        bottomLeftRadius: false,
        bottomRightRadius: false,
      },
      {
        id: 2,
        topLeftRadius: false,
        topRightRadius: false,
        bottomLeftRadius: false,
        bottomRightRadius: false,
      },
      {
        id: 3,
        topLeftRadius: false,
        topRightRadius: true,
        bottomLeftRadius: false,
        bottomRightRadius: false,
      },
    ],
    [
      {
        id: 4,
        topLeftRadius: false,
        topRightRadius: false,
        bottomLeftRadius: false,
        bottomRightRadius: false,
      },
      {
        id: 5,
        topLeftRadius: false,
        topRightRadius: false,
        bottomLeftRadius: false,
        bottomRightRadius: false,
      },
      {
        id: 6,
        topLeftRadius: false,
        topRightRadius: false,
        bottomLeftRadius: false,
        bottomRightRadius: false,
      },
    ],
    [
      {
        id: 7,
        topLeftRadius: false,
        topRightRadius: false,
        bottomLeftRadius: true,
        bottomRightRadius: false,
      },
      {
        id: 8,
        topLeftRadius: false,
        topRightRadius: false,
        bottomLeftRadius: false,
        bottomRightRadius: false,
      },
      {
        id: 9,
        topLeftRadius: false,
        topRightRadius: false,
        bottomLeftRadius: false,
        bottomRightRadius: false,
      },
    ],
    [
      {
        id: 0,
        topLeftRadius: false,
        topRightRadius: false,
        bottomLeftRadius: true,
        bottomRightRadius: false,
      },
      {
        id: -1,
        topLeftRadius: false,
        topRightRadius: false,
        bottomLeftRadius: false,
        bottomRightRadius: true,
      },
    ],
  ];

  return (
    <View // Dialog
      style={{ backgroundColor: CustomColor.OnPrimary, borderRadius: 28 }}
    >
      <View // Content
        style={{
          padding: 24,
          gap: 16,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: CustomColor.OnSecondaryContainer,
              fontSize: 16,
              opacity: 0.7,
              fontFamily: "InterRegular",
            }}
          >
            {inputTitle}:{" "}
          </Text>
          <Text
            style={{
              color: CustomColor.OnSecondaryContainer,
              fontSize: 16,
              fontFamily: "InterRegular",
            }}
          >
            MK {numPadValue}
          </Text>
        </View>

        <View // Numpad
        >
          {numKeyRows.map((row, rowIndex) => {
            return (
              <View
                key={rowIndex}
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                {row.map((numKey, numKeyIndex) => {
                  return (
                    <TouchableOpacity
                      key={numKeyIndex}
                      style={{
                        width: 88,
                        height: 48,
                        backgroundColor: CustomColor.SecondaryContainer,
                        borderWidth: 1,
                        borderColor: CustomColor.Secondary,
                        borderTopRightRadius: numKey.topRightRadius ? 8 : 0,
                        borderTopLeftRadius: numKey.topLeftRadius ? 8 : 0,
                        borderBottomLeftRadius: numKey.bottomLeftRadius ? 8 : 0,
                        borderBottomRightRadius: numKey.bottomRightRadius
                          ? 8
                          : 0,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: -1,
                      }}
                      onPress={() => {
                        setNumPadValue((oldNumPadValue) => {
                          if (oldNumPadValue == "0" && numKey.id == 0)
                            return "0";

                          if (
                            (oldNumPadValue == "0" ||
                              oldNumPadValue.length == 1) &&
                            numKey.id == -1
                          )
                            return "0";

                          if (numKey.id == -1 && oldNumPadValue.length > 1)
                            return String(oldNumPadValue).substring(
                              0,
                              String(oldNumPadValue).length - 1
                            );

                          if (oldNumPadValue == "0" && numKey.id != -1)
                            return String(numKey.id);

                          return String(oldNumPadValue) + String(numKey.id);
                        });
                      }}
                    >
                      {numKey.id == -1 ? (
                        <Icons name={"ic_backspace"} />
                      ) : (
                        <Text style={{ fontFamily: "InterRegular" }}>
                          {numKey.id}
                        </Text>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
      <View // Actions
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 24,
            paddingHorizontal: 8,
          }}
        >
          <CustomButton
            style={{ borderWidth: 0 }}
            title={"Cancel"}
            titleColor={"#555358"}
          />
          <CustomButton
            style={{ borderWidth: 0 }}
            title={"Done"}
            onPress={() => onDonePress(numPadValue)}
          />
        </View>
      </View>
    </View>
  );
}

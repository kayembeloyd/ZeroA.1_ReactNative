import React from "react";
import { Text, View } from "react-native";
import { CustomColor } from "../assets/colors/Color";
import Icons from "../assets/icons/Icons";
import CustomButton from "./CustomButton";

export default function KeypadDialogContent() {
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
            From:{" "}
          </Text>
          <Text
            style={{
              color: CustomColor.OnSecondaryContainer,
              fontSize: 16,
              fontFamily: "InterRegular",
            }}
          >
            MK2000
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
                    <View
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
                    >
                      {numKey.id == -1 ? (
                        <Icons name={"ic_backspace"} />
                      ) : (
                        <Text style={{ fontFamily: "InterRegular" }}>
                          {numKey.id}
                        </Text>
                      )}
                    </View>
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
          <CustomButton style={{ borderWidth: 0 }} title={"Done"} />
        </View>
      </View>
    </View>
  );
}
import React from "react";
import { Text, View } from "react-native";
import CustomChip from "./CustomChip";
import { ScrollView } from "react-native";

export default function FilterRow({ filterTitle, children, filterChips }) {
  return (
    <View // Filter Row container
      style={{
        height: 48,
        width: "100%",
        flexDirection: "row",
      }}
    >
      <Text // filterTitle
        style={{
          textAlignVertical: "center",
          paddingHorizontal: 16,
          fontFamily: "InterRegular",
          fontSize: 14,
        }}
      >
        {filterTitle}
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          gap: 16,
          paddingHorizontal: 16,
        }}
      >
        {children}
      </ScrollView>
    </View>
  );
}

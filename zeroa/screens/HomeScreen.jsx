import React from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
import Icons from "../assets/icons/Icons";
import CustomText from "../components/CustomText";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <View style={{ paddingVertical: 20 }}>
        <CustomText>Default Text size</CustomText>
        <CustomText style={{ fontSize: 30 }}>Font size 40</CustomText>
        <CustomText style={{ fontSize: 40 }}>Font size 40</CustomText>
        <CustomText style={{ fontSize: 50 }}>Font size 40</CustomText>
      </View>
      <Icons name="ic_backspace" />
      <Button
        title="Go to Filters Screen"
        onPress={() => {
          navigation.navigate("filtersScreen");
        }}
      />
      <Button
        title="Go Location Screen"
        onPress={() => {
          navigation.navigate("locationScreen");
        }}
      />
      <Button
        title="Go House Screen"
        onPress={() => {
          navigation.navigate("houseScreen");
        }}
      />
      <Button
        title="Go Saved Screen"
        onPress={() => {
          navigation.navigate("savedScreen");
        }}
      />
    </View>
  );
}

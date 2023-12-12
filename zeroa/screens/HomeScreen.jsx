import React from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
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

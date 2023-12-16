import React from "react";
import { View, StatusBar, FlatList } from "react-native";
import CustomTopAppBar from "../components/CustomTopAppBar";
import { CustomColor } from "../assets/colors/Color";
import House from "../components/House";

export default function SavedScreen({ navigation }) {
  return (
    <View>
      <StatusBar backgroundColor={CustomColor.Primary} />

      <CustomTopAppBar
        title={"Saved"}
        leadingOptions={[
          {
            name: "ic_back",
            color: CustomColor.OnPrimary,
            onPress: () => {
              navigation.goBack();
            },
          },
        ]}
      />

      <FlatList
        data={[
          1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 9, 6, 7, 6, 56, 57, 76, 7, 5,
        ]}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ item, index }) => index}
        renderItem={({ item, index }) => {
          return (
            <House
              key={index}
              onPress={() => {
                navigation.navigate("houseScreen");
              }}
            />
          );
        }}
        ListFooterComponent={() => <View style={{ height: 64 }} />}
      />
    </View>
  );
}

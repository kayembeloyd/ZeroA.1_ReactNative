import React, { useState } from "react";
import { StatusBar, Text } from "react-native";
import { View } from "react-native";
import CustomTopAppBar from "../components/CustomTopAppBar";
import { CustomColor } from "../assets/colors/Color";
import ListItem from "../components/ListItem";
import CustomButton from "../components/CustomButton";
import FilterRow from "../components/FilterRow";
import Icons from "../assets/icons/Icons";
import House from "../components/House";
import { FlatList } from "react-native";
import CustomDialog from "../components/CustomDialog";
import KeypadDialogContent from "../components/KeypadDialogContent";

export default function HomeScreen({ navigation }) {
  const houses = [
    { id: 0, type: "header" },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];

  const [budgetInputDialogVisibility, setBudgetInputDialogVisibility] =
    useState(false);

  const ListHeaderComponent = () => {
    return (
      <View>
        <CustomTopAppBar
          title={"ZeroA"}
          trailingOptions={[
            { name: "ic_saved_local", color: CustomColor.OnPrimary },
          ]}
        />

        <View // Filters
          style={{
            backgroundColor: CustomColor.PrimaryContainer,
            paddingVertical: 7,
          }}
        >
          <ListItem
            title={"Filters"}
            color={CustomColor.OnPrimaryContainer}
            endButton={
              <CustomButton
                title={"More filters"}
                onPress={() => {
                  navigation.navigate("filtersScreen");
                }}
              />
            }
            style={{}}
          />

          <FilterRow
            filterTitle={"Monthly rent"}
            filterChips={[
              {
                uneditableText: "From",
                text: "15k",
                onPress: () => {
                  setBudgetInputDialogVisibility(true);
                },
              },
              { uneditableText: "To", text: "20k" },
              {
                uneditableText: "Exact price",
                text: "?",
                backgroundColor: CustomColor.Secondary,
              },
            ]}
          />

          <FilterRow
            filterTitle={"Location"}
            filterChips={[
              {
                uneditableText: "Lilongwe Area 23",
                icons: [{ name: "ic_location" }],
              },
              {
                icons: [{ name: "ic_add_location" }],
                backgroundColor: CustomColor.Secondary,
              },
            ]}
          />
          <FilterRow
            filterTitle={"Rooms"}
            filterChips={[
              { text: "1" },
              { text: "2" },
              { text: "3" },
              { text: "4" },
              { text: "5" },
              {
                uneditableText: "Custom",
                text: "?",
                backgroundColor: CustomColor.Secondary,
              },
            ]}
          />
        </View>
      </View>
    );
  };

  const HouseTitleBar = () => {
    return (
      <View // HousesTitleBar
        style={{
          height: 48,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          backgroundColor: CustomColor.OnPrimary,
        }}
      >
        <Text
          style={{
            fontFamily: "InterRegular",
            fontSize: 15,
            color: CustomColor.OnPrimaryContainer,
          }}
        >
          45 Houses Found
        </Text>
        <Icons name={"ic_filter_menu"} color={CustomColor.OnPrimaryContainer} />
      </View>
    );
  };

  return (
    <View>
      <StatusBar backgroundColor={CustomColor.Primary} />

      <CustomDialog
        visible={budgetInputDialogVisibility}
        contentComponent={
          <KeypadDialogContent
            onDonePress={() => {
              setBudgetInputDialogVisibility(false);
            }}
          />
        }
      />

      <FlatList
        data={houses}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        keyExtractor={(item) => item.id}
        stickyHeaderIndices={[1]}
        renderItem={({ item }) => {
          if (item.type) return <HouseTitleBar />;
          else
            return (
              <House
                onPress={() => {
                  navigation.navigate("houseScreen");
                }}
              />
            );
        }}
      />
    </View>
  );
}

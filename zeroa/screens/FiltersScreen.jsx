import React from "react";
import { View, StatusBar } from "react-native";
import CustomTopAppBar from "../components/CustomTopAppBar";
import { CustomColor } from "../assets/colors/Color";
import FilterRow from "../components/FilterRow";
import ListItem from "../components/ListItem";

export default function FiltersScreen() {
  const additionalFilters = [
    {
      title: "Security",
      filterChips: [
        { text: "Fenced" },
        { text: "Without fence" },
        { text: "dogs" },
      ],
    },
    {
      title: "Floor",
      filterChips: [
        { text: "Tiled" },
        { text: "Cement" },
        { text: "Wood" },
        { text: "Tiled" },
        { text: "Cement" },
        { text: "Wood" },
      ],
    },
  ];

  return (
    <View // Main container
      style={{ backgroundColor: CustomColor.SecondaryContainer, flex: 1 }}
    >
      <StatusBar backgroundColor={CustomColor.Primary} />

      <CustomTopAppBar
        leadingOptions={[{ name: "ic_check" }]}
        trailingOptions={[{ name: "ic_close" }]}
        title={"More filters"}
      />

      <View // Default filters
        style={{
          paddingVertical: 7,
          backgroundColor: CustomColor.SecondaryContainer,
        }}
      >
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

      <ListItem
        title={"Additional Filters"}
        color={CustomColor.OnSecondaryContainer}
        style={{ backgroundColor: CustomColor.SecondaryContainer }}
      />

      <View // Additional filters
        style={{ backgroundColor: CustomColor.SecondaryContainer }}
      >
        {additionalFilters.map((additionalFilter, additionalFilterIndex) => {
          return (
            <FilterRow
              key={additionalFilterIndex}
              filterTitle={additionalFilter.title}
              filterChips={additionalFilter.filterChips}
            />
          );
        })}
      </View>
    </View>
  );
}

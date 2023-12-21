import React, { useRef, useState } from "react";
import { View, StatusBar } from "react-native";
import CustomTopAppBar from "../components/CustomTopAppBar";
import { CustomColor } from "../assets/colors/Color";
import FilterRow from "../components/FilterRow";
import ListItem from "../components/ListItem";
import CustomDialog from "../components/CustomDialog";
import KeypadDialogContent from "../components/KeypadDialogContent";

export default function FiltersScreen({ navigation, route }) {
  const [houseFilters, setHouseFilters] = useState({
    ...route.params.initialHouseFilters,
  });

  const RENT_FEE_MIN = 0;
  const RENT_FEE_MAX = 1;
  const RENT_FEE = 3;
  const LOCATION_ID = 4;

  const numPadValueToFilterIndex = useRef(-1);

  const [numPadDialogVisibity, setNumPadDialogVisibity] = useState(false);

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

      <CustomDialog
        visible={numPadDialogVisibity}
        contentComponent={
          <KeypadDialogContent
            initialValue={houseFilters[numPadValueToFilterIndex.current]?.value}
            inputTitle={
              houseFilters[numPadValueToFilterIndex.current]?.leadText
            }
            onDonePress={(numPadValue) => {
              setNumPadDialogVisibity(false);
              setHouseFilters((oldHouseFilters) => {
                oldHouseFilters[numPadValueToFilterIndex.current].value =
                  numPadValue;
                return oldHouseFilters;
              });
            }}
          />
        }
      />

      <CustomTopAppBar
        leadingOptions={[
          {
            name: "ic_check",
            onPress: () => {
              route.params.onGoBack
                ? route.params.onGoBack(houseFilters)
                : null;
              navigation.goBack();
            },
          },
        ]}
        trailingOptions={[
          {
            name: "ic_close",
            onPress: () => {
              route.params.onGoBack ? route.params.onGoBack(null) : null;
              navigation.goBack();
            },
          },
        ]}
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
              text: houseFilters[RENT_FEE_MIN].value,
              onPress: () => {
                numPadValueToFilterIndex.current = RENT_FEE_MIN;
                setNumPadDialogVisibity(true);
              },
            },
            {
              uneditableText: "To",
              text: houseFilters[RENT_FEE_MAX].value,
              onPress: () => {
                numPadValueToFilterIndex.current = RENT_FEE_MAX;
                setNumPadDialogVisibity(true);
              },
            },
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

import React, { useRef, useState } from "react";
import { View, StatusBar } from "react-native";
import CustomTopAppBar from "../components/CustomTopAppBar";
import { CustomColor } from "../assets/colors/Color";
import FilterRow from "../components/FilterRow";
import ListItem from "../components/ListItem";
import CustomChip from "../components/CustomChip";
import { additionalFilters, defaultFilters } from "../network/Middleman";
import _ from "lodash";

export default function FiltersScreen({ navigation, route }) {
  // Data layer
  const [houseFilters, setHouseFilters] = useState({
    defaultFilters: _.cloneDeep(defaultFilters),
    additionalFilters: _.cloneDeep(additionalFilters),
  });

  return (
    <View // Main container
      style={{ backgroundColor: CustomColor.SecondaryContainer, flex: 1 }}
    >
      <StatusBar backgroundColor={CustomColor.Primary} />

      <CustomTopAppBar
        leadingOptions={[
          {
            name: "ic_check",
            onPress: () => {
              navigation.goBack();
            },
          },
        ]}
        trailingOptions={[
          {
            name: "ic_close",
            onPress: () => {
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
        {/* Load default filters */}
        {houseFilters.defaultFilters.map((category, categoryIndex) => {
          return (
            <FilterRow
              key={categoryIndex}
              filterTitle={category.filterCategory}
            >
              {category.filters.map((filterChip, filterChipIndex) => {
                return (
                  <CustomChip
                    style={{
                      backgroundColor: filterChip.backgroundColor
                        ? filterChip.backgroundColor
                        : null,
                    }}
                    key={filterChipIndex}
                    uneditableText={
                      filterChip.showFilterName ? filterChip.filterName : null
                    }
                    text={filterChip.filterValue}
                    icons={
                      filterChip.iconName
                        ? [{ name: filterChip.iconName }]
                        : null
                    }
                    showDialog={filterChip.showDialog}
                    onPress={
                      filterChip.onPress
                        ? () => {
                            filterChip.onPress(navigation);
                          }
                        : null
                    }
                    onSubmitData={(data) => {
                      setHouseFilters((oldHouseFilters) => {
                        const newHouseFilters = { ...oldHouseFilters };

                        newHouseFilters.defaultFilters[categoryIndex].filters[
                          filterChipIndex
                        ].filterValue = data;

                        return newHouseFilters;
                      });
                    }}
                  />
                );
              })}
            </FilterRow>
          );
        })}
      </View>

      <ListItem
        title={"Additional Filters"}
        color={CustomColor.OnSecondaryContainer}
        style={{ backgroundColor: CustomColor.SecondaryContainer }}
      />

      <View // Additional filters
        style={{ backgroundColor: CustomColor.SecondaryContainer }}
      >
        {/* Load additional filters */}
        {houseFilters.additionalFilters.map((category, categoryIndex) => {
          return (
            <FilterRow
              key={categoryIndex}
              filterTitle={category.filterCategory}
            >
              {category.filters.map((filterChip, filterChipIndex) => {
                return (
                  <CustomChip
                    style={{
                      backgroundColor: filterChip.backgroundColor
                        ? filterChip.backgroundColor
                        : null,
                    }}
                    key={filterChipIndex}
                    uneditableText={
                      filterChip.showFilterName ? filterChip.filterName : null
                    }
                    text={filterChip.filterValue}
                    icons={
                      filterChip.iconName
                        ? [{ name: filterChip.iconName }]
                        : null
                    }
                    showDialog={filterChip.showDialog}
                    onPress={null}
                    onSubmitData={(data) => {
                      console.log(
                        "This is data from the dialog for " +
                          filterChip.filterName +
                          " : " +
                          data
                      );
                    }}
                  />
                );
              })}
            </FilterRow>
          );
        })}
      </View>
    </View>
  );
}

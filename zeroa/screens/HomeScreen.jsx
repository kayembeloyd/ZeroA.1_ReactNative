import React, { useEffect, useState } from "react";
import { StatusBar, Text, View, FlatList } from "react-native";
import CustomTopAppBar from "../components/CustomTopAppBar";
import { CustomColor } from "../assets/colors/Color";
import ListItem from "../components/ListItem";
import CustomButton from "../components/CustomButton";
import FilterRow from "../components/FilterRow";
import Icons from "../assets/icons/Icons";
import House from "../components/House";
import { defaultFilters, netRequest } from "../network/Middleman";
import CustomChip from "../components/CustomChip";

export default function HomeScreen({ navigation }) {
  // Data layer
  const [houses, setHouses] = useState([{ id: 0, type: "header" }]);
  const [houseFilters, setHouseFilters] = useState({
    defaultFilters: [...defaultFilters],
    additionalFilters: [],
  });

  // Networking Layer
  const housesRequest = () => {
    netRequest("/houses", { client: "mobile" })
      .then((response) => {
        if (!response.success) return;

        setHouses(() => [{ id: 0, type: "header" }, ...response.houses.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    housesRequest();
  }, []);

  // Supporting UI
  const ListHeaderComponent = () => {
    return (
      <View>
        <CustomTopAppBar
          title={"ZeroA"}
          trailingOptions={[
            {
              name: "ic_saved_local",
              color: CustomColor.OnPrimary,
              onPress: () => {
                navigation.navigate("savedScreen");
              },
            },
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
          {houses.length - 1} Houses Found
        </Text>
        <Icons name={"ic_filter_menu"} color={CustomColor.OnPrimaryContainer} />
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: CustomColor.OnPrimary }}>
      <StatusBar backgroundColor={CustomColor.Primary} />

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
                house={item}
                onPress={() => {
                  navigation.navigate("houseScreen", { house: item });
                }}
              />
            );
        }}
      />
    </View>
  );
}

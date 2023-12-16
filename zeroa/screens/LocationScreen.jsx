import React from "react";
import { FlatList, StatusBar, Text, View } from "react-native";
import CustomTopAppBar from "../components/CustomTopAppBar";
import { CustomColor } from "../assets/colors/Color";
import Icons from "../assets/icons/Icons";
import FilterRow from "../components/FilterRow";
import ListItem from "../components/ListItem";

export default function LocationScreen() {
  const ListHeaderItem = () => {
    return (
      <View>
        <CustomTopAppBar
          style={{ backgroundColor: CustomColor.PrimaryContainer }}
          leadingOptions={[{ name: "ic_back" }]}
          title={"Search Location"}
          trailingOptions={[{ name: "ic_close" }]}
          titleColor={CustomColor.OnPrimaryContainer}
        />

        <View // Tip Container
          style={{
            paddingHorizontal: 8,
            paddingVertical: 3,
            backgroundColor: CustomColor.PrimaryContainer,
          }}
        >
          <View // Tip
            style={{
              backgroundColor: "#E3D1FF",
              paddingHorizontal: 8,
              paddingVertical: 5,
              borderRadius: 6,
              gap: 10,
              borderWidth: 1,
              borderColor: "#DCC6FF",
            }}
          >
            <View // Title container
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icons name={"ic_idea"} />
              <Text>Tip</Text>
            </View>

            <Text>
              Choose a your location of work, ZeroA will help you find houses
              near that location that si both cost-effetive...
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const SelectedLocationsContainer = () => {
    return (
      <View // SelectedLocationsContainer
        style={{ backgroundColor: CustomColor.PrimaryContainer }}
      >
        <FilterRow
          filterTitle={"Selected"}
          filterChips={[
            {
              uneditableText: "Lilongwe Area 23",
            },
          ]}
        />

        <ListItem title={"Central Region"} endIconName={"ic_down"} pressable />
        <ListItem title={"Lilongwe"} endIconName={"ic_down"} pressable />
      </View>
    );
  };

  return (
    <View>
      <StatusBar backgroundColor={CustomColor.PrimaryContainer} />

      <FlatList
        data={[
          1, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 214, 3243, 2, 543, 254, 3, 5, 23,
          432, 43, 25, 43, 5432, 532, 4, 3225, 4353, 5, 32, 43, 2, 43, 24, 54,
          35, 4, 34, 32, 4, 3224, 32, 432, 54, 3, 4123, 35, 436, 58, 78, 767,
          656, 68, 7, 985, 6543,
        ]}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ item, index }) => index}
        stickyHeaderIndices={[1]}
        ListHeaderComponent={ListHeaderItem}
        renderItem={({ item, index }) => {
          if (index == 0) return <SelectedLocationsContainer key={index} />;
          else
            return (
              <ListItem key={index} title={"Location " + item} pressable />
            );
        }}
      />
    </View>
  );
}

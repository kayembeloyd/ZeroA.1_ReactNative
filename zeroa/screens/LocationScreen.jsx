import React, { useState } from "react";
import { FlatList, StatusBar, Text, View } from "react-native";
import CustomTopAppBar from "../components/CustomTopAppBar";
import { CustomColor } from "../assets/colors/Color";
import Icons from "../assets/icons/Icons";
import FilterRow from "../components/FilterRow";
import ListItem from "../components/ListItem";
import { lilongweLocations } from "../network/Middleman";

export default function LocationScreen({ navigation }) {
  const [selectedLocations, setSelectedLocations] = useState([
    {
      uneditableText: "Area 3",
      onPress: () => {},
    },
  ]);

  const ListHeaderItem = () => {
    return (
      <View>
        <CustomTopAppBar
          style={{ backgroundColor: CustomColor.PrimaryContainer }}
          leadingOptions={[
            {
              name: "ic_back",
              onPress: () => {
                navigation.goBack();
              },
            },
          ]}
          title={"Search Location"}
          trailingOptions={[
            {
              name: "ic_close",
              onPress: () => {
                navigation.goBack();
              },
            },
          ]}
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
        <FilterRow filterTitle={"Selected"} filterChips={selectedLocations} />

        <ListItem title={"Central Region"} endIconName={"ic_down"} pressable />
        <ListItem title={"Lilongwe"} endIconName={"ic_down"} pressable />
      </View>
    );
  };

  const removeMe = (item) => {
    console.log("Remove", item);
  };

  return (
    <View>
      <StatusBar backgroundColor={CustomColor.PrimaryContainer} />

      <FlatList
        data={lilongweLocations}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ item, index }) => index}
        stickyHeaderIndices={[1]}
        ListHeaderComponent={ListHeaderItem}
        renderItem={({ item, index }) => {
          if (index == 0) return <SelectedLocationsContainer />;
          else
            return (
              <ListItem
                title={item}
                pressable
                onPress={() => {
                  for (let i = 0; i < selectedLocations.length; i++) {
                    if (selectedLocations[i].uneditableText == item) return;
                  }

                  setSelectedLocations((oldSelectedLocations) => {
                    const newSelectedLocations = [...oldSelectedLocations];
                    newSelectedLocations.push({
                      uneditableText: item,
                      onPress: () => {
                        removeMe(item);
                      },
                    });

                    return newSelectedLocations;
                  });
                }}
              />
            );
        }}
      />
    </View>
  );
}

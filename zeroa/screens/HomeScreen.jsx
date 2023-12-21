import React, { useCallback, useEffect, useRef, useState } from "react";
import { StatusBar, Text, View, FlatList } from "react-native";
import CustomTopAppBar from "../components/CustomTopAppBar";
import { CustomColor } from "../assets/colors/Color";
import ListItem from "../components/ListItem";
import CustomButton from "../components/CustomButton";
import FilterRow from "../components/FilterRow";
import Icons from "../assets/icons/Icons";
import House from "../components/House";
import CustomDialog from "../components/CustomDialog";
import KeypadDialogContent from "../components/KeypadDialogContent";
import { netRequest } from "../network/Middleman";

export default function HomeScreen({ navigation }) {
  const [houseFilters, setHouseFilters] = useState([
    { leadText: "From", value: 15000 }, // rent_fee_min
    { leadText: "To", value: 30000 }, // rent_fee_max
    { leadText: "Exact Fee", value: 3000 }, // rent_fee
    { value: 2 }, // location_id
  ]);

  const RENT_FEE_MIN = 0;
  const RENT_FEE_MAX = 1;
  const RENT_FEE = 3;
  const LOCATION_ID = 4;

  const numPadValueToFilterIndex = useRef(-1);

  const [numPadDialogVisibity, setNumPadDialogVisibity] = useState(false);
  const [houses, setHouses] = useState([{ id: 0, type: "header" }]);

  const [totalHouses, setTotalHouses] = useState(0);

  const housesRequest = () => {
    netRequest("/houses", { client: "mobile" })
      .then((response) => {
        if (!response.success) return;

        setHouses(() => [{ id: 0, type: "header" }, ...response.houses.data]);
        setTotalHouses(response.houses.total);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const handleBackData = (newHouseFilters) => {
    if (newHouseFilters) {
      setHouseFilters(newHouseFilters);
      forceUpdate();
    }
  };

  useEffect(() => {
    housesRequest();
  }, []);

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
                  navigation.navigate("filtersScreen", {
                    initialHouseFilters: houseFilters,
                    onGoBack: handleBackData,
                  });
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
                onPress: () => {
                  navigation.navigate("locationScreen");
                },
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
          {totalHouses} Houses Found
        </Text>
        <Icons name={"ic_filter_menu"} color={CustomColor.OnPrimaryContainer} />
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: CustomColor.OnPrimary }}>
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

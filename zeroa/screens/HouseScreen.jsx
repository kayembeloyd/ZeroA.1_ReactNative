import React, { useState } from "react";
import { FlatList, Image, StatusBar, Text, View } from "react-native";
import { CustomColor } from "../assets/colors/Color";
import CustomTopAppBar from "../components/CustomTopAppBar";
import Icons from "../assets/icons/Icons";
import ListItem from "../components/ListItem";
import { ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HouseScreen({ navigation, route }) {
  const [house, setHouse] = useState(route.params.house);

  return (
    <View>
      <StatusBar backgroundColor={CustomColor.Primary} />

      <CustomTopAppBar
        leadingOptions={[
          {
            name: "ic_back",
            onPress: () => {
              navigation.goBack();
            },
          },
        ]}
        title={"House #" + house.id}
      />

      <ScrollView>
        <FlatList // Images
          style={{
            padding: 8,
          }}
          contentContainerStyle={{ gap: 6 }}
          horizontal
          data={house.images}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => {
            return (
              <Image // House image
                style={{
                  borderRadius: 12,
                  width: 330,
                  height: 192,
                  marginRight: index == house.images.length - 1 ? 20 : 0,
                }}
                src={item.path}
              />
            );
          }}
        />

        <View // ImmediateInfoContainer
          style={{ paddingHorizontal: 16, paddingVertical: 12, gap: 14 }}
        >
          <View // Price Installment Container
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View // Container 1
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <View // Container 2
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Icons name={"ic_money"} />
                <Icons name={"ic_tap"} />
                <Icons name={"ic_power"} />
              </View>

              <Text
                style={{
                  fontFamily: "InterRegular",
                  fontSize: 15,
                  color: CustomColor.OnPrimaryContainer,
                }}
              >
                MK {house.rent_fee}/month
              </Text>
            </View>

            <Text style={{ fontFamily: "InterRegular", fontSize: 13 }}>
              Payable {house.installment_period} month
              {house.installment_period > 1 ? "s" : null}
            </Text>
          </View>

          <Text style={{ fontFamily: "InterRegular", fontSize: 13 }}>
            Available on {house.available_on}
          </Text>

          <View // Location container
            style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
          >
            <Icons
              name={"ic_location"}
              color={CustomColor.OnPrimaryContainer}
            />
            <Text
              style={{
                fontFamily: "InterRegular",
                fontSize: 15,
                color: CustomColor.OnPrimaryContainer,
              }}
            >
              {house.location.name} {house.location.district}{" "}
              {house.location.region} {house.location.description}
            </Text>
          </View>
        </View>

        <ListItem title={"Details"} />

        <Text
          style={{
            fontFamily: "InterRegular",
            fontSize: 14,
            paddingHorizontal: 16,
          }}
        >
          {house.description}
        </Text>

        <View // Views container
          style={{
            flexDirection: "row",
            padding: 16,
            gap: 6,
            alignItems: "center",
          }}
        >
          <Icons name={"ic_view"} />
          <Text style={{ fontFamily: "InterRegular", fontSize: 13 }}>
            {house.number_of_views} views
          </Text>
        </View>

        <View //Buttons container
          style={{
            flexDirection: "row",
            paddingVertical: 16,
            paddingHorizontal: 8,
            gap: 10,
          }}
        >
          <CustomButton title={"Save"} />
          <CustomButton title={"Share"} endIconName={"ic_share"} />
        </View>
        <ListItem title={"Landlord Contact"} />

        {house.landlords.map((landlord, index) => {
          return (
            <View //Contact
              key={index}
              style={{
                paddingHorizontal: 16,
                flexDirection: "row",
                justifyContent: "space-between",
                height: 48,
                alignItems: "center",
              }}
            >
              <View // Number Container
                style={{ flexDirection: "row", gap: 5, paddingHorizontal: 16 }}
              >
                <Icons name={"ic_copy"} />
                <Text style={{ fontFamily: "InterRegular" }}>
                  {landlord.phone_number}
                </Text>
              </View>

              <Icons name={"ic_phone"} />
            </View>
          );
        })}

        <View // Spacer
          style={{ height: 100 }}
        ></View>
      </ScrollView>
    </View>
  );
}

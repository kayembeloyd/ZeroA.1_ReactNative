import React from "react";
import { FlatList, Image, StatusBar, Text, View } from "react-native";
import { CustomColor } from "../assets/colors/Color";
import CustomTopAppBar from "../components/CustomTopAppBar";
import Icons from "../assets/icons/Icons";
import ListItem from "../components/ListItem";
import { ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HouseScreen() {
  const houseImages = [
    require("../assets/images/house_1.jpg"),
    require("../assets/images/house_2.jpg"),
    require("../assets/images/house_3.jpg"),
  ];

  return (
    <View>
      <StatusBar backgroundColor={CustomColor.Primary} />

      <CustomTopAppBar
        leadingOptions={[{ name: "ic_back" }]}
        title={"House #434"}
      />

      <ScrollView>
        <FlatList // Images
          style={{
            padding: 8,
          }}
          contentContainerStyle={{ gap: 6 }}
          horizontal
          data={houseImages}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => {
            return (
              <Image // House image
                style={{
                  borderRadius: 12,
                  width: 330,
                  height: 192,
                  marginRight: index == houseImages.length - 1 ? 20 : 0,
                }}
                source={item}
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
                MK 20,000/month
              </Text>
            </View>

            <Text style={{ fontFamily: "InterRegular", fontSize: 13 }}>
              2-3 months instalment
            </Text>
          </View>

          <Text style={{ fontFamily: "InterRegular", fontSize: 13 }}>
            Available 1 December 2023
          </Text>

          <View // Location container
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
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
              Area 49 Bagdad close to Sparrows.
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
          House available on 1st January 2024.{"\n"}✓ 3 bedrooms smart house,{" "}
          {"\n"}✓ Masters en suite(shower and bathtub).{"\n"}✓ Fitted wardrobes{" "}
          {"\n"}
          ✓kitchen unit{"\n"}✓ Geyser{"\n"}✓ Outside smart pit latrine{"\n"}✓
          Fruit trees mangoes,lemons and Avocados available{"\n"}✓ Fully tiled.
          {"\n"}✓ Stand alone.{"\n"}
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
            225 views
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

        {[1, 2, 3, 4, 5, 7, 8].map((contact, index) => {
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
                <Text style={{ fontFamily: "InterRegular" }}>0882264081</Text>
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

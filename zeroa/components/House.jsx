import React from "react";
import { Text, View } from "react-native";
import { CustomColor } from "../assets/colors/Color";
import Icons from "../assets/icons/Icons";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";

export default function House({ onPress }) {
  const { width } = Dimensions.get("window");

  return (
    <TouchableOpacity // House Container
      style={{
        padding: 8,
        borderRadius: 12,
        gap: 6,
        backgroundColor: CustomColor.PrimaryContainer,
        marginHorizontal: 16,
        marginVertical: 5,
      }}
      onPress={onPress}
    >
      <View // Location container
        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
      >
        <Icons name={"ic_location"} color={CustomColor.OnPrimaryContainer} />
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

      <Text style={{ fontFamily: "InterRegular", fontSize: 13 }}>
        3 Bedrooms
      </Text>

      <Image // House image
        style={{
          borderRadius: 12,
          width: "100%",
          height: 152,
        }}
        source={require("../assets/images/house_1.jpg")}
      />

      <View // Details Container
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Text style={{ fontFamily: "InterRegular", fontSize: 14 }}>
          ✓ 3 bedrooms smart house, {"\n"}✓ Masters en suite (shower and
          bathtub). {"\n"}✓ Fitted wardrobes
        </Text>

        <View // Views Container
          style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
        >
          <Icons name={"ic_view"} color={CustomColor.OnPrimaryContainer} />
          <Text style={{ fontFamily: "InterRegular", fontSize: 13 }}>2</Text>
        </View>
      </View>

      <Text style={{ fontFamily: "InterRegular", fontSize: 15 }}>More...</Text>
    </TouchableOpacity>
  );
}

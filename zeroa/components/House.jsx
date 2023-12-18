import React from "react";
import { Text, View } from "react-native";
import { CustomColor } from "../assets/colors/Color";
import Icons from "../assets/icons/Icons";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

export default function House({ house, onPress }) {
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
          numberOfLines={1}
          style={{
            fontFamily: "InterRegular",
            fontSize: 15,
            color: CustomColor.OnPrimaryContainer,
            flex: 1,
          }}
        >
          {house.location.name} {house.location.district}{" "}
          {house.location.region} {house.location.description}
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

      <Text style={{ fontFamily: "InterRegular", fontSize: 13 }}>
        {house.number_of_rooms} Bedroom{house.number_of_rooms > 1 ? "s" : null}
      </Text>

      <Image // House image
        style={{
          borderRadius: 12,
          width: "100%",
          height: 152,
        }}
        src={house.images[0].path}
      />

      <View // Details Container
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Text
          numberOfLines={3}
          style={{ fontFamily: "InterRegular", fontSize: 14, flex: 1 }}
        >
          {house.description}
        </Text>

        <View // Views Container
          style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
        >
          <Icons name={"ic_view"} color={CustomColor.OnPrimaryContainer} />
          <Text style={{ fontFamily: "InterRegular", fontSize: 13 }}>
            {house.number_of_views}
          </Text>
        </View>
      </View>

      <Text style={{ fontFamily: "InterRegular", fontSize: 15 }}>More...</Text>
    </TouchableOpacity>
  );
}

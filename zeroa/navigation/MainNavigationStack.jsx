import React from "react";
import HomeScreen from "../screens/HomeScreen";
import FiltersScreen from "../screens/FiltersScreen";
import HouseScreen from "../screens/HouseScreen";
import SavedScreen from "../screens/SavedScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LocationScreen from "../screens/LocationScreen";

const MainStackNavigator = createNativeStackNavigator();

export default function MainNavigationStack() {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen name="homeScreen" component={HomeScreen} />
      <MainStackNavigator.Screen
        name="filtersScreen"
        component={FiltersScreen}
      />
      <MainStackNavigator.Screen name="houseScreen" component={HouseScreen} />
      <MainStackNavigator.Screen name="savedScreen" component={SavedScreen} />
      <MainStackNavigator.Screen
        name="locationScreen"
        component={LocationScreen}
      />
    </MainStackNavigator.Navigator>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import MainNavigationStack from "./zeroa/navigation/MainNavigationStack";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    InterRegular: require("./zeroa/assets/fonts/inter/InterRegular.otf"),
    InterBold: require("./zeroa/assets/fonts/inter/InterBold.otf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainNavigationStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});

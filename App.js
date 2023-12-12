import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import MainNavigationStack from "./zeroa/navigation/MainNavigationStack";

export default function App() {
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

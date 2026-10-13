import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import HomeScreen from "./screen/HomeScreen";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

export default function App() {
  const [loaded] = Font.useFonts({
    Mountain: require("./assets/fonts/Mountain.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  let screen = (
    <HomeScreen />
  )

  return (
    <>
      <StatusBar style='light' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

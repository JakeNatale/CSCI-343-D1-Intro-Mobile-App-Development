import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useEffect } from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Colors from "./constants/Colors";
import HomeScreen from "./screens/HomeScreen";
import VacationsOverviewScreen from "./screens/VacationsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

export default function App() {
  const [loaded] = Font.useFonts({
    Vacation: require("./assets/fonts/Mountain.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={styles.screenOptions}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Vacation Locations",
            }}
          />
          <Stack.Screen
            name="VacationsOverviewScreen"
            component={VacationsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
  screenOptions: {
    headerStyle: { backgroundColor: Colors.primary300 },
    headerTintColor: Colors.primary800,
    headerTitleStyle: { fontFamily: "Vacation", fontSize: 40},
    contentStyle: { backgroundColor: Colors.primary800},
  },
});

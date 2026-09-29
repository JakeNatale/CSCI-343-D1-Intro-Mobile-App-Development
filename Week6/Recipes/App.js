import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import Colors from "./constants/Colors";

export default function App() {
  // Set up out custom fonts
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes_Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes_Bold.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentID, setCurrentID] = useState(4);
  const [currentRecipe, setCurrentRecipe] = useState([
    {
      id: 1,
      title: "Pasta",
      text: "Boil Water\n Add Pasta\n Stir in water for 7-10 minutes\n Drain with strainer\n Enjoy",
    },
    {
      id: 2,
      title: "Steak",
      text: "Season with favorite seasonings\n Heat grill to 450-500 degreese on medium low\n cook each side for roughly 7 minutes for med rare\n Enjoy",
    },
    {
      id: 3,
      title: "Quesadilla",
      text: "Heat pan on stove at medium\n Add butter to grease the base of pan\n Place tortilla and add butter as needed\n Add Cheese\n Wait for cheese to melt and crisp to your liking\n Enjoy."
    }
  ])

  function homeScreenHandler() {
    setCurrentScreen("");
  }

  function recipeScreenHandler() {
    setCurrentScreen("recipe");
  }

  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText){
    setCurrentRecipe((currentRecipe) => [
      ...currentRecipe,
      { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
    ]);
    setCurrentID(currentID + 1);
    recipeScreenHandler();
  }

  function deleteRecipeHandler(id) {
    setCurrentRecipe((currentRecipe) => {
      return currentRecipe.filter((item) => item.id !== id);
    })
  }

  let screen = <HomeScreen onNext={recipeScreenHandler} />;

  if (currentScreen === "recipe") {
    screen = (
      <RecipeScreen onHome={homeScreenHandler} onAdd={addRecipeScreenHandler} onDelete={deleteRecipeHandler} currentRecipe={currentRecipe}/>
    );
  }

    if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen onCancel={recipeScreenHandler} onAdd={addRecipeHandler}/>
    );
  }

  return (
    <>
    <StatusBar style="auto"/>
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});

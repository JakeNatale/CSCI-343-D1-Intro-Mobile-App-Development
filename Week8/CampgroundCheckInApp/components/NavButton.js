import { Text, View, Pressable, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/Colors";


export default function NavButton(props) {
  const { width, height } = useWindowDimensions();
  return (
    <Pressable
      onPress={props.onNext}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontSize: width * 0.07}]}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 1000,
    maxWidth: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 300,
    backgroundColor: Colors.primary300,
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    padding: 8,
    textAlign: "center",
    fontFamily: "Mountain",
    color: Colors.accent500,
  },
});

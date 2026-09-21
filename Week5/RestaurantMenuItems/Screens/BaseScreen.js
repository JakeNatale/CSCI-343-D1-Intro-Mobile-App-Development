import { StyleSheet, Text, View, Image, Linking, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";

export default function BaseScreen(props) {
  // Setting Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Valentinos</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/Valentinos.png")}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/3QBn7nHi6M2XvE3Y9")
          }
        >
          323 US-17 BUS{"\n"}Surfside Beach, SC 29575
        </Text>

        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:8438394949")}
        >
          (843)839-4949
        </Text>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://valentinoitalian.com/")}
        >
          www.Valentino.com
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="View Menu" onPress={props.onNext} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380,
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center",
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 7,
    fontFamily: "squealer",
    color: Colors.primary500,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
    width: 150,
  },
});

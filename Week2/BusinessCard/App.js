import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/Images/business_image.jpg")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Player's Choice</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("https://www.playerschoicenmb.com");
          } }
          >www.playerschoicenmb.com</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("tel:8432720268");
          } }
          >843-272-0268</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("https://maps.app.goo.gl/dD3s1W9URZE27x8W8");
          } }
          >Open in Google Maps</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333"
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
    width: "100%"
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    borderColor: "black",
    borderWidth: 5
  },
  textContainer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
  },
  name: {
    fontSize: 55,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    marginBottom: 100
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontStyle: "italic",
    marginBottom: 20
  }
});
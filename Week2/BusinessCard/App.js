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
            source={require("./assets/Images/me_image.jpg")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Jake Natale</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("mailto:janatale@coastal.edu");
          } }
          >janatale@coastal.edu</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("tel:2014789513");
          } }
          >201-478-9513</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("https://github.com/JakeNatale/CSCI-343-D1-Intro-Mobile-App-Development");
          } }
          >Link to GitHub</Text>
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
    marginTop: 60,
    width: "100%"
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
    borderColor: "black",
    borderWidth: 5
  },
  textContainer: {
    flex: 1.5,
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
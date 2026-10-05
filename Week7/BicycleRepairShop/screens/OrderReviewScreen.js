import { useSafeAreaInsets } from "react-native-safe-area-context";
import {ScrollView, StyleSheet, View, Text, ImageBackground, } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";

export default function OrderReviewScreen(props) {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
    source={require("../assets/images/repair.png")}
    resizeMode="cover"
    style={styles.container}
    imagestyle={styles.backgroundImage}
    >
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Title>Order Review</Title>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
              Your appointment has been scheduled with the details below
            </Text>
          </View>

          <View style={styles.serviceTimeContainer}>
            <Text style={styles.serviceTime}>Service Time: </Text>

            <Text style={styles.serviceTimeDecision}>{props.repairTime}</Text>

            <Text style={styles.serviceTime}>Service Options:</Text>

            {props.services.map((item) => {
              if (item.value) {
                return (
                  <Text key={item.id} style={styles.serviceTimeDecision}>
                    {item.name} (${item.price})
                  </Text>
                );
              }
            })}
          </View>

          <View style={styles.costContainer}>
            <Text style={styles.costText}>
              Subtotal: ${props.price.toFixed(2)}
            </Text>

            <Text style={styles.costText}>
              Sales Tax: ${(props.price * 0.06).toFixed(2)}
            </Text>

            <Text style={styles.costText}>
              Final Total: ${(props.price + props.price * 0.06).toFixed(2)}
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <NavButton onNext={props.onNext}>Return Home</NavButton>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    opacity: 0.3,
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 30,
    borderColor: Colors.primary300,
  },
  scrollContainer: {
    flex: 1,
  },
  subTitleContainer: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary300,
  },
  serviceTimeContainer: {
    flex: 3,
  },
  serviceTime: {
    fontSize: 20,
    color: Colors.primary300,
    fontFamily: "Note",
  },
  serviceTimeDecision: {
    textAlign: "center",
    fontSize: 17,
    color: Colors.primary300,
    fontWeight: "bold",
  },
  costContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  costText: {
    fontSize: 20,
    color: Colors.primary300,
    fontWeight: "bold",
    marginVertical: 5,
  },
  buttonContainer: {
    alignItems: "center",
  },
});

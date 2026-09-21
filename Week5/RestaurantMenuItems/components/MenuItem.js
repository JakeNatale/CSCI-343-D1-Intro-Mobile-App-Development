import { View, Image, StyleSheet, Text } from "react-native";
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";
import Colors from "../constants/colors";

export default function MenuItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.image} />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20,
        width: "100%"
    },
    titleContainer: {
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: Colors.primary500
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontFamily: "squealer"
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: "black",
    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: "cover",
    },
    priceContainer: {
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: Colors.primary500
    },
    price: {
        fontSize: 30,
        textAlign: "center",
        fontFamily: "squealer-embossed"
    },
});

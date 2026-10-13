import { Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/Colors";

export default function Title(props) {
    const { width, height } = useWindowDimensions();
    return <Text style={[styles.title, { fontSize: width * 0.13 }]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        color: Colors.primary300,
        textShadowColor: Colors.accent800,
        textShadowRadius: 25,
        fontFamily: "Mountain",
        textAlign: "center",
    },
})
import { StyleSheet, View, Text, Button } from "react-native"
import Colors from "../constants/Colors"

export default function NotesItem(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}>{props.title}</Text>
            </View>
            <View style={styles.itemButtonsContainer}>
                <View styles={styles.button}>
                    <Button title="View" onPress={props.onView}/>
                </View>
                <View styles={styles.button}>
                    <Button title="Delete" onPress={props.onDelete}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 18,
        borderRadius: 6,
        backgroundColor: Colors.accent500
    },
    itemTitleContainer: {
        justifyContent: "center"
    },
    itemTitle: {
        fontFamily: "paperNoteBold",
        fontSize: 20,
        color: Colors.primary300,
        padding: 8
    },
    itemButtonsContainer: {
        flexDirection: "row",
        gap: 8,
        marginRight: 4
    },
    button: {
        marginHorizontal: 8,
        marginVertical: 5
    }
})
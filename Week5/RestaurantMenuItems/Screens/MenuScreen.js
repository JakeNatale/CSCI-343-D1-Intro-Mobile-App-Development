import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import MenuItem from "../components/MenuItem";
import { useState } from "react";

export default function MenuScreen(props) {
  // Setting Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [menuItems, setMenuItems] = useState([
    {
      name: "Fried Calamari",
      Image: require("../assets/images/Calamari.png"),
      price: "$16.95",
      id: 1,
    },
    {
      name: "Marsala",
      Image: require("../assets/images/Marsala.png"),
      price: "Chicken $25.95 | Veal $31.95",
      id: 2,
    },
    {
      name: "Lamb Chops",
      Image: require("../assets/images/LambChops.png"),
      price: "$39.00",
      id: 3,
    },
    {
      name: "Saltimbocca",
      Image: require("../assets/images/Saltimbocca.png"),
      price: "Chicken $26.50 | Veal $32.50",
      id: 4,
    },
    {
      name: "Clams",
      Image: require("../assets/images/Clams.png"),
      price: "$16.95",
      id: 5,
    },
  ]);

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
        <Title>Menu</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <MenuItem
                name={itemData.item.name}
                image={itemData.item.Image}
                price={itemData.item.price}
              />
            );
          }}
        />
      </View>
      <View styles={styles.buttonContainer}>
        <Button title="Return Home" onPress={props.onNext} />
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
  listContainer: {
    flex: 7,
    width: 380,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
    width: 150
  }
});

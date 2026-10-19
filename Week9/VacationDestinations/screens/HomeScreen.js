
import { View, Text, FlatList } from "react-native";
import StateGridTitle from "../components/StateGridTitle";
import { COUNTRIES } from "../data/dummy-data";

export default function HomeScreen(props) {
  function renderStateItem(itemData) {
    function pressHandler() {
      props.navigation.navigate("VacationsOverviewScreen", {
        countryId: itemData.item.id,
      });
    }

    return (
      <StateGridTitle
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={COUNTRIES}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderStateItem}
        numColumns={2}
      />
    </View>
  );
}


import { View, StyleSheet, FlatList } from "react-native";
import ListingItem from "./ListingItem";

export default function List(props) {
  function renderNewsItem(itemData) {
    const newsItemProps = {
      id: itemData.item.id,
      category: itemData.item.category,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      agency: itemData.item.agency,
      description: itemData.item.description,
      imageUrl: itemData.item.imageUrl,
      listIndex: itemData.index,
    };

    return <ListingItem {...newsItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNewsItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});

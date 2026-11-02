import { StyleSheet, Text, View } from "react-native";
import { NEWS } from "../data/dummy_data";
import List from "../components/List/List";
import Colors from "../constants/Colors";
import { useSelector } from "react-redux";

export default function BookmarksScreen() {
  const favoriteNewsIds = useSelector((state) => state.favoriteNews.ids);

  const favoriteNews = NEWS.filter((newsItem) => {
    return favoriteNewsIds.includes(newsItem.id);
  });

  if (favoriteNews.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          You have no saved news articles yet!
        </Text>
      </View>
    );
  } else {
    return <List items={favoriteNews} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent800,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary900,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

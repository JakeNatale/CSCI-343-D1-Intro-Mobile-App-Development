
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { NEWS } from "../data/dummy_data";
import { useState } from "react";
import { useLayoutEffect } from "react";
import Colors from "../constants/Colors";
import BookmarkButton from "../components/BookmarkButton";

export default function NewsDetailScreen(props) {
  const newsId = props.route.params.newsId;
  const selectedNews = NEWS.find((news) => news.id === newsId);

  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      title: "News Detail",
      headerRight: () => (
        <BookmarkButton
          onPress={headerButtonPressHandler}
          pressed={pressed}
        />
      ),
    });
  }, [props.navigation, pressed]);

  if (!selectedNews) {
    return (
      <View style={styles.rootContainer}>
        <Text>News article not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedNews.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.headline}>
          {selectedNews.headline}
        </Text>

        <Text style={styles.date}>
          {selectedNews.date}
        </Text>

        <Text style={styles.author}>
          By {selectedNews.author}
        </Text>

        <Text style={styles.agency}>
          Source: {selectedNews.agency}
        </Text>

        <Text style={styles.description}>
          {selectedNews.description}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500,
    flex: 1,
    alignItems: "center",
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  headline: {
    color: Colors.primary300,
    fontSize: 30,
    fontFamily: "playfairBold",
    textAlign: "center",
    paddingBottom: 15,
  },
  date: {
    color: Colors.primary300,
    fontSize: 18,
    fontFamily: "playfair",
    paddingBottom: 10,
  },
  author: {
    color: Colors.primary300,
    fontSize: 18,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  agency: {
    color: Colors.primary300,
    fontSize: 18,
    fontFamily: "playfairBold",
    paddingBottom: 20,
  },
  description: {
    color: Colors.primary300,
    width: "95%",
    textAlign: "justify",
    fontSize: 16,
    fontFamily: "playfair",
    lineHeight: 26,
  },
});

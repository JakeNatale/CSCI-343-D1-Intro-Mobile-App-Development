import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { NEWS } from "../data/dummy_data";
import { useLayoutEffect, useState } from "react";
import Colors from "../constants/Colors";
import BookmarkButton from "../components/BookmarkButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export default function NewsDetailScreen(props) {
  const favoriteNewsIds = useSelector((state) => state.favoriteNews.ids);
  const dispatch = useDispatch();

  const newsId = props.route.params.newsId;
  const selectedNews = NEWS.find((news) => news.id === newsId);

  const newsIsFavorite = favoriteNewsIds.includes(newsId);

  function changeFavoriteStatusHandler() {
    if(newsIsFavorite) {
      dispatch(removeFavorite({ id: newsId }));
    } else {
      dispatch(addFavorite({ id: newsId }));
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            isFavorite={newsIsFavorite}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView
      style={styles.rootContainer}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedNews.imageUrl }} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.headline}>{selectedNews.headline}</Text>

        <Text style={styles.date}>{selectedNews.date}</Text>

        <Text style={styles.author}>By {selectedNews.author}</Text>

        <Text style={styles.agency}>{selectedNews.agency}</Text>

        <Text style={styles.description}>{selectedNews.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primary800,
  },
  scrollContent: {
    paddingBottom: 25,
  },
  imageContainer: {
    marginVertical: 10,
    marginHorizontal: 8,
    height: 260,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary300,
    alignItems: "center",
    padding: 18,
    marginHorizontal: 8,
    marginBottom: 10,
  },
  headline: {
    color: Colors.accent800,
    fontSize: 29,
    fontFamily: "playfairBold",
    textAlign: "center",
    paddingBottom: 12,
  },
  date: {
    color: Colors.accent500,
    fontSize: 17,
    fontFamily: "playfair",
    paddingBottom: 8,
  },
  author: {
    color: Colors.accent800,
    fontSize: 16,
    fontFamily: "playfair",
    paddingBottom: 5,
    textAlign: "center",
  },
  agency: {
    color: Colors.accent500,
    fontSize: 20,
    fontFamily: "playfairBold",
    paddingBottom: 15,
  },
  description: {
    color: Colors.accent800,
    width: "100%",
    textAlign: "left",
    fontSize: 17,
    fontFamily: "playfair",
    lineHeight: 27,
    paddingHorizontal: 5,
  },
});

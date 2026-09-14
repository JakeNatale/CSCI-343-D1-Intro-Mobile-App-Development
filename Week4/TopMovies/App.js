import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from "react-native";
import Movie from "./components/Movie";

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "Demon Slayer:\n Infinity Castle",
      image: require("./assets/images/DemonSlayerMovie.png"),
      rating: "9.8",
      id: 1,
    },
    {
      name: "Spiderman:\n Homecoming",
      image: require("./assets/images/SpiderManHomeComing.png"),
      rating: "9.5",
      id: 2,
    },
    {
      name: "Avengers Infinity War",
      image: require("./assets/images/IronMan1.png"),
      rating: "9",
      id: 3,
    },
    {
      name: "Spiderman:\n Brand New Day",
      image: require("./assets/images/SpiderManBrandNewDay.png"),
      rating: "8.7",
      id: 4,
    },
    {
      name: "My Neighbor Totoro",
      image: require("./assets/images/MyNeighborTotoro.png"),
      rating: "8.5",
      id: 5,
    },
    {
      name: "Iron Man",
      image: require("./assets/images/IronMan1.png"),
      rating: "8.2",
      id: 6,
    },
    {
      name: "Black Panther",
      image: require("./assets/images/BlackPanther.png"),
      rating: "8",
      id: 7,
    },
    {
      name: "Doctor Strange",
      image: require("./assets/images/DoctorStrange.png"),
      rating: "7.6",
      id: 8,
    },
    {
      name: "The Lego Movie",
      image: require("./assets/images/TheLegoMovie.png"),
      rating: "7.5",
      id: 9,
    },
    {
      name: "Wreck It Ralph",
      image: require("./assets/images/WreckItRalph.png"),
      rating: "7",
      id: 10,
    },
  ]);

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>
        <View style={styles.listContainer}>
          {/*<ScrollView
            showsHorizontalScrollIndicator={false}
            alwaysBounceVertical={false}
          >
            {movieItems.map((itemData) => (
              <Movie
                name={itemData.name}
                image={itemData.image}
                rating={itemData.rating}
              />
            ))}
          </ScrollView>*/}

          <FlatList
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            data={movieItems}
            keyExtractor={(item, index) => (item.id)}
            renderItem={(itemData) => {
              return (
              <Movie
                name={itemData.item.name}
                image={itemData.item.image}
                rating={itemData.item.rating}
              />
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#95fb82ff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "90%",
  },
});

import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import HomeData from "../Info/HomeData";
import { useNavigation } from "@react-navigation/native";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={styles.main}>
      <Text style={styles.Title}>Dashboard</Text>
      <View style={styles.mainbutton}>
        <Pressable
          style={[styles.button, { backgroundColor: `#48d1cc` }]}
          onPress={() => navigation.navigate("Ongoing")}
        >
          <Text style={styles.text}>Ongoing</Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: "yellow" }]}
          onPress={() => navigation.navigate("Pending")}
        >
          <Text style={styles.text}>Pending</Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={() => navigation.navigate("Denied")}
        >
          <Text style={styles.text}>Denied</Text>
        </Pressable>
      </View>
      <Text style={styles.Title}>Jobs For You</Text>
      <FlatList
        data={HomeData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
  },
  Title: {
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
    marginBottom: 10,
  },
  mainbutton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    backgroundColor: "#fff",
    borderRadius: 700,
    padding: 10,
    marginBottom: 30,
    marginHorizontal: 10,
    width: 100,
    height: 100,
  },
  text: {
    flex: 1,
    flexDirection: "column",
    marginTop: 25,
    marginBottom: 30,
    color: "black",
    fontWeight: "bold",
    borderRadius: 10,
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

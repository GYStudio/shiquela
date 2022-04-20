import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.views}>
      <View style={styles.lifeishard}>
        <View>
          <Pressable
            style={styles.button2}
            onPress={() => navigation.navigate("Home")}
          >
            <Text>SIGN IN/UP LATER</Text>
          </Pressable>
        </View>
        <View style={styles.flexs}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.text}>SIGN IN</Text>
          </Pressable>
          <Pressable
            style={styles.button1}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.text1}>REGISTER</Text>
          </Pressable>
        </View>
      </View>
      <Text style={styles.text3}>Shiquela</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  views: {
    flex: 1,
    flexDirection: "column-reverse",
    justifyContent: "center",
  },
  flexs: {
    flexDirection: "row",
    paddingBottom: 15,
  },
  lifeishard: {
    flexDirection: "column",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 10,
  },
  button1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 0,
    backgroundColor: "black",
    borderRadius: 10,
  },
  button2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    resizeMode: "contain",
    paddingBottom: 5,
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    color: "black",
    fontWeight: "bold",
    borderRadius: 10,
  },
  text1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 30,
    color: "white",
    fontWeight: "bold",
  },
  text2: {
    flex: 1,
    color: "black",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  text3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

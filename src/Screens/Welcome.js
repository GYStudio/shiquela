import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.views}>
      <View style={styles.lifeishard}>
        <Text style={styles.header}>Shiquela</Text>

        <View>
          <Pressable
            style={styles.button2}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.signUpLaterText}>SIGN IN/UP LATER</Text>
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
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  views: {
    flex: 1,
    justifyContent: "center",
  },
  flexs: {
    flexDirection: "row",
  },
  lifeishard: {
    flexDirection: "column",
    padding: 20,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 10,
    marginRight: 10,
  },
  button1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    paddingLeft: 0,
    backgroundColor: "black",
    borderRadius: 10,
    marginLeft: 10,
  },
  button2: {
    marginVertical: 20,
  },
  signUpLaterText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    fontWeight: "bold",
    borderRadius: 10,
    padding: 20,
  },
  text1: {
    alignItems: "center",
    justifyContent: "flex-end",
    color: "white",
    fontWeight: "bold",
    padding: 20,
  },
  text2: {
    color: "black",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 36,
    fontWeight: "bold",
  },
});

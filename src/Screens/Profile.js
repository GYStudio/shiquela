import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { auth } from "../../Backend/Firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const handleSignOut = async () => {
    await signOut(auth);
    navigation.navigate("Welcome");
  };
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Pressable style={styles.button} onPress={handleSignOut}>
        <Text style={styles.text}>SIGN OUT</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 10,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    fontWeight: "bold",
    borderRadius: 10,
    padding: 20,
  },
});

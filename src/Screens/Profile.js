import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { auth } from "../../Backend/Firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EditProfile from './EditProfile';

const Profile = () => {
  const navigation = useNavigation();
  const handleSignOut = async () => {
    await signOut(auth);
    navigation.navigate("Welcome");
  };
  return (
    <View style={styles.container}>
      <View style={styles.Icon}> 
        <MaterialCommunityIcons name="account-circle" size={150}/>
        <Text style={styles.NameText}>{auth.currentUser.displayName}</Text>
        <Text style={styles.EmailText}>{auth.currentUser.email}</Text>
      </View>
      <Pressable style={styles.SignOut} onPress={handleSignOut}>
        <Text style={styles.SignOutText}>SIGN OUT</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Icon: {
    alignSelf: "center",
  },
  NameText: {
    fontSize: 30,
    alignSelf: "center",
  },
  EmailText: {
    fontSize: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  SignOut: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "black",
    borderRadius: 10,
  },
  SignOutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 8,
  },
});

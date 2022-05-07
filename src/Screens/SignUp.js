import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Backend/Firebase";

const SignUp = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const handleChange = (name) => (text) => {
    setData((_dt) => ({
      ..._dt,
      [name]: text,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(auth.currentUser, {
        displayName: data.name,
      });
      alert(`Successfully created user: ${data.name}`);
      // once the user is signed up, react navigation automatically redirects to 'Home'. See ShiquelaNav.js code and observe 'onAuthStateChanged' to see how it works.
    } catch (err) {
      // show alert message
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Text style={styles.Title}>Register</Text>
      <Text style={styles.text}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("name")}
        value={data.name}
        placeholder="Name"
        keyboardType="default"
      />
      <Text style={styles.Text}>E-mail</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("email")}
        value={data.email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("password")}
        value={data.password}
        placeholder="Password"
        secureTextEntry
      />
      <Text style={styles.text}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("cPassword")}
        value={data.cPassword}
        placeholder="Confirm Password"
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <Pressable style={styles.button1} onPress={handleSubmit}>
          <Text style={styles.text1}>Create Account</Text>
        </Pressable>
      )}
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Title: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },  
  Text: {
    marginLeft: 10 
  },
  button1: {
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
  text: {
    marginLeft: 10,
  },
  text1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 8,
  },
});

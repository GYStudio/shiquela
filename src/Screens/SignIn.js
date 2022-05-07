import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Backend/Firebase";

const SignIn = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({
    email: "",
    password: "",
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
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert(`Successfully signed in user: ${auth.currentUser.displayName}`);
      // once the user is signed in, react navigation automatically redirects to 'Home'. See ShiquelaNav.js code and observe 'onAuthStateChanged' to see how it works.
    } catch (err) {
      // show alert message
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Text style={styles.Title}>Sign In</Text>
      <Text style={styles.text}>E-mail</Text>
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
      <Pressable
        style={styles.button2}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text>Forgot Password?</Text>
      </Pressable>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <Pressable style={styles.button1} onPress={handleSubmit}>
          <Text style={styles.text1}>Sign In</Text>
        </Pressable>
      )}
    </View>
  );
};

export default SignIn;

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
  button2: {
    marginLeft: 10,
    paddingBottom: 5,
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

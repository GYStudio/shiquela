import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const [number, onChangeNumber] = React.useState(number);
  const [number2, onChangeNumber2] = React.useState(number2);
  const [number3, onChangeNumber3] = React.useState(number3);
  const [number4, onChangeNumber4] = React.useState(number4);

  return (
    <SafeAreaView>
      <Text>Register</Text>
      <Text style={styles.text}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Name"
        keyboardType="numeric"
      />
      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Email"
        keyboardType="numeric"
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber3}
        value={number3}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Text style={styles.text}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber4}
        value={number4}
        placeholder="Confirm Password"
        keyboardType="numeric"
      />
      <Pressable
        style={styles.button1}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text1}>Create Account</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 340,
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
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 30,
    color: "white",
    fontWeight: "bold",
  },
});

import { Button, StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, multiline } from 'react-native'
import React from 'react'
import Home from './Home'
import ForgotPassword from './ForgotPassword';
import tw from 'twrnc';

const SignIn = ({navigation}) => {
  const [number, onChangeNumber] = React.useState(number);
  const [number2, onChangeNumber2] = React.useState(number2);

  return (
    <SafeAreaView>
      <Text style={tw`text-black font-bold text-2xl`}>Sign In</Text>
      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Email"
        keyboardType="numeric"
        multiline={multiline || true}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Password"
        keyboardType="numeric"
      />
       <Pressable style={styles.button2} onPress={()=> navigation.navigate(ForgotPassword)}>
        <Text style={tw``}>Forgot Password?</Text>
      </Pressable>
       <Pressable style={styles.button1} onPress={()=> navigation.navigate(Home)}>
        <Text style={styles.text1}>Sign In</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignIn

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
  button2: {
    marginLeft: 10,
    paddingBottom: 5,
  },
  text: {
    marginLeft: 10 
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
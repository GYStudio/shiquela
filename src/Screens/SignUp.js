import { Button, StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native'
import React from 'react'
import Home from './Home'
import tw from 'twrnc';

const SignUp = ({navigation}) => {
  const [number, onChangeNumber] = React.useState(number);
  const [number2, onChangeNumber2] = React.useState(number2);
  const [number3, onChangeNumber3] = React.useState(number3);
  const [number4, onChangeNumber4] = React.useState(number4);

  return (
    <SafeAreaView>
      <Text style={styles.Register}>Register</Text>
      <Text style={styles.Text}>Name</Text>
      <TextInput
        style={styles.Input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Name"
        keyboardType="numeric"
      />
      <Text style={styles.Text}>E-mail</Text>
      <TextInput
        style={styles.Input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Email"
        keyboardType="numeric"
      />
       <Text style={styles.Text}>Password</Text>
       <TextInput
        style={styles.Input}
        onChangeText={onChangeNumber3}
        value={number3}
        placeholder="Password"
        keyboardType="numeric"
      />
       <Text style={styles.Text}>Confirm Password</Text>
       <TextInput
        style={styles.Input}
        onChangeText={onChangeNumber4}
        value={number4}
        placeholder="Confirm Password"
        keyboardType="numeric"
      />
       <Pressable style={styles.Button} onPress={()=> navigation.navigate(Home)}>
        <Text style={styles.ButtonText}>Create Account</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignUp

const styles = StyleSheet.create({
  Register: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },  
  Text: {
    marginLeft: 10 
  },
  Button: {
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
  ButtonText: {
    flex: 1, 
    alignItems: "center", 
    marginVertical: 10,
    color: "white",
    fontWeight: "bold",
  },
});
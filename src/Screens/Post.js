import { Button, StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, multiline, numberOfLines } from 'react-native'
import React from 'react'
import Discover from './Discover';
import tw from 'twrnc';

const Post = ({navigation}) => {
  const [number, onChangeNumber] = React.useState(number);
  const [number2, onChangeNumber2] = React.useState(number2);
  const [number3, onChangeNumber3] = React.useState(number3);
  const [number4, onChangeNumber4] = React.useState(number4);

  return (
    <SafeAreaView>
      <Text style={styles.text}>Job category</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Job category"
        keyboardType="numeric"
        multiline={true}
        numberOfLines={4}
      />
      <Text style={styles.text}>Job description</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Job description"
        keyboardType="numeric"
        multiline={multiline || true}
        numberOfLines={4}
      />
       <Text style={styles.text}>Estimated salary</Text>
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumber3}
        value={number3}
        placeholder="Estimated salary"
        keyboardType="numeric"
        multiline={multiline || true}
        numberOfLines={4}
      />
       <Text style={styles.text}>Priority questions</Text>
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumber4}
        value={number4}
        placeholder="Priority questions"
        keyboardType="numeric"
        multiline={multiline || true}
        numberOfLines={4}
      />
       <Pressable style={styles.button1} onPress={()=> navigation.navigate(Discover)}>
        <Text style={styles.text1}>Confirm</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({
  input: {
    height: 80,
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
    marginTop: 10
  },
  text1: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "flex-end", 
    marginBottom: 15, 
    color: "white",
    fontWeight: "bold",
    marginTop: 10
  },
});
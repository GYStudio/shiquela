import { ScrollView, StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, multiline, numberOfLines } from 'react-native'
import React from 'react'
import Discover from './Discover';
import { auth } from "../../Backend/Firebase";
import firestore from '@react-native-firebase/firestore';

const Post = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({
    category: "",
    title: "",
    description: "",
    salary: "",
    requirements: "",
  });

  const handleChange = (name,) => (text) => {
    setData((_dt) => ({
      ..._dt,
      [name]: text,
    }));
  };

  const handleSubmit = async ({navigation}) => {
    try {
      setLoading(true);
        firestore()
        .collection('Jobs')
        .add({
          userId: auth.currentUser.displayName,
          title: data.title,
          description: data.description,
          salary: data.salary,
          requirements: data.requirements,
          postTime: firestore.Timestamp.fromDate(new Date()),
        })
      alert(`Successfully posted!: ${data.name}`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={{marginBottom: 10,}}>
      <Text style={styles.text}>Job category</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("")}
        value={" "}
        placeholder="Job category"
        keyboardType="numeric"
        multiline={true}
      />
      <Text style={styles.text}>Job Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("title")}
        value={data.title}
        placeholder="e.g Clean my house"
        keyboardType="numeric"
        multiline={true}
        numberOfLines={4}
      />
      <Text style={styles.text}>Job description</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("description")}
        value={data.description}
        placeholder="Describe your project here..."
        keyboardType="numeric"
        multiline={multiline || true}
        numberOfLines={4}
      />
       <Text style={styles.text}>Estimated salary</Text>
       <TextInput
        style={styles.input}
        onChangeText={handleChange("salary")}
        value={data.salary}
        placeholder="How much will you pay?"
        keyboardType="numeric"
        multiline={multiline || true}
        numberOfLines={4}
      />
       <Text style={styles.text}>Requirements and Priority questions</Text>
       <TextInput
        style={styles.input}
        onChangeText={handleChange("requirements")}
        value={data.requirements}
        placeholder="What do you want from the people you hire?"
        keyboardType="numeric"
        multiline={multiline || true}
        numberOfLines={4}
      />
       <Pressable style={styles.button1} onPress={handleSubmit}>
        <Text style={styles.text1}>Confirm</Text>
      </Pressable> 
    </ScrollView>
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
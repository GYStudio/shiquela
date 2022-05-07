import { StyleSheet, Text, View, Pressable, TextInput, ActivityIndicator} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from './Profile'
import { auth } from '../../Backend/Firebase';
import { updateEmail, updatePassword } from 'firebase/auth';
import { updateProfile } from "firebase/auth";
import { async } from '@firebase/util';

const EditProfile = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
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
      await updateProfile(auth.currentUser, {
        displayName: data.name,
      });
      await updateEmail(auth.currentUser, data.email);
      await updatePassword(auth.currentUser, data.password, data.cPassword);
      alert(`Successfully updated!: ${data.name}`);
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
      <View style={styles.icon}>
      <MaterialCommunityIcons name="account-circle" size={150}/>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("name")}
        defaultValue={auth.currentUser.displayName}
        editable
        // value={data.name}
        placeholder="Name"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleChange("email")}
        defaultValue={auth.currentUser.email}
        editable
        // value={data.email}
        placeholder="Email"
        keyboardType="email-address"
      />
       <TextInput
        style={styles.input}
        onChangeText={handleChange("password")}
        value={data.password}
        editable
        placeholder="Password"
        secureTextEntry
      />
       <TextInput
        style={styles.input}
        onChangeText={handleChange("cPassword")}
        value={data.cPassword}
        editable
        placeholder="Confirm Password"
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <Pressable style={styles.ConfirmButton} onPress={handleSubmit}>
        <Text style={styles.ConfirmText}>Confirm</Text>
      </Pressable>
      )}
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    ConfirmButton: {
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    ConfirmText: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "flex-end", 
        marginBottom: 15, 
        color: "white",
        fontWeight: "bold",
        marginTop: 10
    },
    icon: {
        alignSelf: "center",
    }
})
import { StyleSheet, Text, View, Pressable, TextInput} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EditProfile from './EditProfile';

const Profile = ({navigation}) => {
  return (
    <View>
      <View style={styles.icon}> 
        <MaterialCommunityIcons name="account-circle" size={150}/>
        <Text style={styles.Text}>George Blue</Text>
        <Text style={styles.text1}>4.5 Stars, 148 Reviews</Text>
      </View>
      <View style={styles.PressableView}> 
      <Pressable style={styles.button}>
        <Text style={styles.ButtonText}>90% Job Completion Rate</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.ButtonText}>70% Job Completed On Time</Text>
      </Pressable>
      </View>
      <View> 
      <Pressable style={styles.button1}>
        <Text style={styles.ButtonText}>82% Repeat Hire Rate</Text>
      </Pressable>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  ProfileText:{
    color: "black",
    justifyContent:'center',
    marginLeft: 110,
    marginBottom: 20,
  },
  icon: {
    alignSelf: "center",
},
Text: {
  fontSize: 30,
},
text1: {
  fontSize: 20,
  marginBottom: 20
},
ButtonText: {
  flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    color: "black",
    marginBottom: 15,
    fontWeight: "bold",
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10
},
button: {
  flex: 1, 
  alignItems: "center",
  justifyContent: "center",
  width: 350,
  backgroundColor: "#fff",
  borderWidth: 3, 
  borderRadius: 10,
  marginLeft: 8,
  marginRight: 7
},
button1: {
  flex: 1, 
  alignItems: "center",
  flexDirection: "row",
  alignSelf: "center",
  width: 175,
  backgroundColor: "#fff",
  borderWidth: 3, 
  borderRadius: 10,
  marginLeft: 8,
  marginRight: 7
},
PressableView: {
  flexDirection: "row",
  marginBottom: 15
}
})
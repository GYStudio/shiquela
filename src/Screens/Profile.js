import { StyleSheet, Text, View, Pressable, TextInput} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EditProfile from './EditProfile';

const Profile = ({navigation}) => {
  return (
    <View>
      <View>
        <Text style={styles.ProfileText}>Profile Screen</Text> 
        <MaterialCommunityIcons 
        name="cog-outline" 
        size={24} 
        color="black" 
        onPress={()=> navigation.navigate(EditProfile)}/>
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
})
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import Profile from './Profile'

const EditProfile = ({navigation}) => {
  return (
    <View>
      <Text>EditProfile</Text>
      <Pressable style={styles.ConfirmButton} onPress={()=> navigation.navigate(Profile)}>
        <Text style={styles.ConfirmText}>Confirm</Text>
      </Pressable>
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
    ConfirmText: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "flex-end", 
        marginBottom: 15, 
        color: "white",
        fontWeight: "bold",
        marginTop: 10
    },
})
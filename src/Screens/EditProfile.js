import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from './Profile'

const EditProfile = ({navigation}) => {
    const [number, onChangeNumber] = React.useState(number);
  const [number2, onChangeNumber2] = React.useState(number2);
  const [number3, onChangeNumber3] = React.useState(number3);
  const [number4, onChangeNumber4] = React.useState(number4);

  return (
    <View>
      <View style={styles.icon}>
      <MaterialCommunityIcons name="account-circle" size={150}/>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="George Blue"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="georgeblue@gmail.com"
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumber3}
        value={number3}
        placeholder="+251123456789"
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumber4}
        value={number4}
        placeholder="Password"
        keyboardType="numeric"
      />
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
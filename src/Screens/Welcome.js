import { StyleSheet, Text, View, Button, Pressable} from 'react-native'
import React from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import Home from './Home';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.MainView}>
      <View style={styles.DoubleButtonView}> 
        <Pressable style={[styles.Button, {backgroundColor: "#fff"}]} onPress={()=> navigation.navigate(SignIn)}>
          <Text style={styles.Text}>SIGN IN</Text>
        </Pressable>
        <Pressable style={[styles.Button, {backgroundColor: "black",}]} onPress={()=> navigation.navigate(SignUp)}>
          <Text style={[styles.Text, {color: "white"}]}>REGISTER</Text>
        </Pressable>
      </View>
      <View> 
        <Pressable style={styles.SkipButton} onPress={()=> navigation.navigate(Home)}>
          <Text style={[styles.Text, {color: "black"}]}>SIGN IN/UP LATER</Text>
        </Pressable>
      </View>
      <Text style={styles.Title}>Shiquela</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  MainView: {
    flex: 1, 
    flexDirection: "column-reverse", 
    justifyContent: "center"
  },
  SkipButton: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "flex-end", 
    resizeMode: "contain",
    paddingBottom: 5
  },
  Text: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    fontWeight: "bold",
    marginVertical: 10,
    borderRadius: 10,
  },
  DoubleButtonView: {
    flexDirection: "row", 
    paddingBottom: 15
  },
  Button: {
      flex: 1, 
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      paddingVertical: 5,
      marginHorizontal: 8,
      paddingHorizontal: 5,
      borderWidth: 3, 
      borderRadius: 10,
  },
  Title: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    fontWeight: 'bold',
    fontSize: 35,
    marginLeft: 110,
    marginTop: 250
  },
});
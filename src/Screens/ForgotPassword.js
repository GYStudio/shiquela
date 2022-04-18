import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignIn from './SignIn'
import tw from 'twrnc'

const ForgotPassword = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ForgotPassword Screen</Text>
      <Button 
      title='SignIn'
      onPress={()=> navigation.navigate(SignIn)}/>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})
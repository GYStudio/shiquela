import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import HomeData from '../Info/HomeData'
import Ongoing from './Ongoing';
import Pending from './Pending';
import Denied from './Denied';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View>
      <Text style={[tw`text-black font-bold text-2xl`, styles.text2]}>Dashboard</Text>
      <View style={styles.flexs}> 
        <Pressable style={styles.button} onPress={()=> navigation.navigate(Ongoing)}>
          <Text style={styles.text}>Ongoing</Text>
        </Pressable>
        <Pressable style={styles.button1} onPress={()=> navigation.navigate(Pending)}>
          <Text style={styles.text}>Pending</Text>
        </Pressable>
        <Pressable style={styles.button2} onPress={()=> navigation.navigate(Denied)}>
          <Text style={styles.text}>Denied</Text>
        </Pressable>
      </View>
      <View>
        <Text style={[tw`text-black font-bold text-2xl`, styles.flatlisttitle]}>Jobs For You</Text>
        <FlatList
        data={HomeData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  // main: {
  //   flex: 1, 
  //   flexDirection: "column", 
  //   justifyContent: "center",
  // },
  flatlisttitle:{
    justifyContent: 'center',
  },
  button: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    backgroundColor: "#fff",
    borderRadius: 700,
    padding: 10,
    width: 100,
    height: 100,
    backgroundColor: `#48d1cc`
},
button1: {
  flex: 1, 
  alignItems: "center",
  justifyContent: "center",
  width: 50,
  backgroundColor: "#fff",
  borderRadius: 700,
  padding: 10,
  width: 100,
  height: 100,
  backgroundColor: "yellow"
},
button2: {
  flex: 1, 
  alignItems: "center",
  justifyContent: "center",
  width: 50,
  backgroundColor: "#fff",
  borderRadius: 700,
  padding: 10,
  width: 100,
  height: 100,
  backgroundColor: "red"
},
text: {
  flex: 1, 
  alignItems: "center", 
  justifyContent: "center", 
  marginBottom: 30, 
  color: "black",
  fontWeight: "bold",
  borderRadius: 10,
},
flexs: {
  flexDirection: "row", 
  // paddingBottom: 15, 
  justifyContent: "space-between", 
  // justifyContent: "space-around"
},
text2: {
  flex: 1, 
  color: "black",
  // alignItems: "center",
  justifyContent: "center", 
  flexDirection: "row",
  marginBottom: 30
},
})
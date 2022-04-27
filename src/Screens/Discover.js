import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import HomeData from '../Info/HomeData';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Discover = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  
  const renderItem = ({ item }) => (
      <Item title={item.title} />
    );

  return (
    <View> 
      <View style={styles.searcbar}> 
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    /> 
    <MaterialCommunityIcons name="filter-outline" size={26} />
    </View>
    <FlatList
    data={HomeData}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    numColumns={3}
    />
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
item: {
  backgroundColor:"white",
  padding: 20,
  marginHorizontal: 10,
  marginVertical: 5,
},
searcbar: {
  marginLeft: 10,
  marginRight: 10,
  marginTop: 10,
  marginBottom: 10,
  flexDirection: "row"
},
})
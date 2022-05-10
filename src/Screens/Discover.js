import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import HomeData from '../Info/HomeData';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth, firestore } from "../../Backend/Firebase";
import { getDocs, addDoc, collection, Timestamp, Firestore, onSnapshot, QuerySnapshot, QueryDocumentSnapshot, doc, documentId } from "firebase/firestore";
import { async } from '@firebase/util';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Discover = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([[]]);

  const onChangeSearch = query => setSearchQuery(query);

  const fetchData = async () => {
    try {
      setLoading(true);
      const getData = await getDocs(collection(firestore, "Jobs"));
      getData.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
      const data = doc.data()
      const _data = {
        userId: auth.currentUser.displayName,
        title: data.title,
        description: data.description,
        salary: data.salary,
        requirements: data.requirements,
        contactDetails: data.contactDetails,
        postTime: Timestamp.fromDate(new Date()),
      };

      setData(_data)
      });
      alert(`Successfully fetched Data!: ${auth.currentUser.displayName}`)
    } catch (error) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    numColumns={1}
    />
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
// item: {
//   backgroundColor:"white",
//   padding: 20,
//   marginHorizontal: 10,
//   marginVertical: 5,
//   height: "75px",
//   width: "100px"
// },
item: {
  backgroundColor: "white",
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
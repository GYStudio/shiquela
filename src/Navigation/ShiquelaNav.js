// import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import Discover from "../Screens/Discover";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Settings from "../Screens/Settings";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import Welcome from "../Screens/Welcome";
import ForgotPassword from "../Screens/ForgotPassword";
import Ongoing from "../Screens/Ongoing";
import Pending from "../Screens/Pending";
import Denied from "../Screens/Denied";
import Post from "../Screens/Post";
import { auth } from "../../Backend/Firebase";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ShiquelaNav = () => {
  const navigation = useNavigation();

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();

  // Handle user state changes

  const onStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  React.useEffect(() => {
    if (user && !initializing) {
      navigation.navigate("Main");
    }
  }, [user, initializing]);

  React.useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <Stack.Navigator initialRouteName={"Welcome"}>
      <Stack.Screen
        name="Main"
        component={TabNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Ongoing" component={Ongoing} />
      <Stack.Screen name="Pending" component={Pending} />
      <Stack.Screen name="Denied" component={Denied} />
    </Stack.Navigator>
  );
};

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={50}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ShiquelaNav;

// const styles = StyleSheet.create({});

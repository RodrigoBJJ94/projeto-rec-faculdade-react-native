import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./screens/Home/Home";
import Insert from "./screens/Insert/Insert";
import List from "./screens/List/List";
import Delete from "./screens/Delete/Delete";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Insert" component={Insert} />
          <Tab.Screen name="List" component={List} />
          <Tab.Screen name="Delete" component={Delete} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

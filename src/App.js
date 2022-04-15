import React from "react";
import { View, StatusBar } from "react-native";
import Home from "./screens/Home/Home";
import Styles from "./Styles";

export default function App() {
  return (
    <View style={Styles.app}>
      <StatusBar backgroundColor="#000000" />
      <Home />
    </View>
  );
};

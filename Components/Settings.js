
import React from "react";
import { View, Text, Button } from "react-native";


export default class Settings extends React.Component {
  static navigationOptions = {
    headerTitle: "Settings",
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}
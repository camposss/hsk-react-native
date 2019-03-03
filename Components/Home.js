
import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";


export default class Home extends React.Component {
  static navigationOptions = {
    headerTitle: 'Home',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>大家好！</Text>
        <Text>这里可以学习汉语</Text>
        <Button
          title="Get Started"
          onPress={() => this.props.navigation.navigate('StudyScreen')}
        />
      </View>
    );
  }
}

import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import StudyScreen from "./StudyScreen";
import InfoModal from "./Modals/InfoModal";

class Home extends React.Component {
  static navigationOptions = {
    headerTitle: null,
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

const MainStack = createStackNavigator(
  {
    Home: Home,
    StudyScreen: StudyScreen,
    Info: {
      screen: InfoModal
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42bff4',
      },
      headerTintColor: '#fff',
    },
  }
);

// const RootStack = createStackNavigator(
//   {
//     Main: {
//       screen: MainStack,
//     },
//     Info: {
//       screen: InfoModal,
//     },
//   },
//   {
//     mode: 'modal',
//     // headerMode: 'none',
//   }
// );

export default createAppContainer(MainStack);
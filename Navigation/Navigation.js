import React from "react";
import { View, Text, Button } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

//UI icons
import Ionicons from "react-native-vector-icons/Ionicons";

//component screens
import HomeScreen from "../Components/Home";
import StudyScreen from "../Components/StudyScreen";
import SettingsScreen from "../Components/Settings";

//Modals
import InfoModal from "../Components/Modals/InfoModal";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  StudyScreen: StudyScreen,
  initialRouteName: "Home"
});
const StudyStack = createStackNavigator({
  StudyScreen: StudyScreen,
  Info: InfoModal,
  initialRouteName: "StudyScreen"
});
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  initialRouteName: "Settings"
});

const AppContainer = createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Study: StudyStack,
      Settings: SettingsStack
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          switch (routeName) {
            case "Home":
              iconName = "ios-home";
              break;
            case "Study":
              iconName = `ios-create`;
              break;
            case "Settings":
              iconName = `ios-options`;
              break;
          }
          // if (routeName === "Home") {
          //   iconName = `ios-information-circle${focused ? "" : "-outline"}`;
          //   // Sometimes we want to add badges to some icons.
          //   // You can check the implementation below.
          //   IconComponent = HomeIconWithBadge;
          // } else if (routeName === "Settings") {
          //   iconName = `ios-options${focused ? "" : "-outline"}`;
          // }

          return <IconComponent name={iconName} size={25} color={tintColor} />;
        }
      }),
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }
    }
  )
);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

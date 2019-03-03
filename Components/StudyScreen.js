import React, {Component} from "react";
import { View, Text, Button } from "react-native";
import InfoModal from "./Modals/InfoModal";

class StudyScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: 'Study',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Info')}
          title="Info"
          color="blue"
      />
      ),
    };
  };

  render() {

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Study Screen</Text>
      </View>
    );
  }
}


export default StudyScreen;
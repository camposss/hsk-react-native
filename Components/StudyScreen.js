import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Icon, Image, Button } from "react-native-elements";
import hsk1 from "../assets/hsk-vocab/hsk1.json";

import InfoModal from "./Modals/InfoModal";

class StudyScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: "Flashcard",
      headerRight: (
        <Button
          onPress={() => navigation.navigate("Info")}
          title="Info"
          type="clear"
        />
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      currentHskData: []
    };
  }

  renderHskData() {
    //determine level-- for now will be hsk1

    //return random index of array

    let randomIndex = Math.floor(Math.random() * hsk1.length + 1);
    console.log(hsk1[randomIndex]);
    if (hsk1[randomIndex]) {
      return hsk1[randomIndex];
    }
  }

  render() {
    const currentHskWordData = this.renderHskData();
    return (
      <Card
        containerStyle={styles.cardContainer}
        title="Shanghai, China"
        image={require("../assets/images/shanghai.png")}
      >
        <View style={styles.bottomCardSectionContainer}>
          <View style={styles.studyTextContainer}>
            <Text style={styles.chinese_character}>
              {currentHskWordData.chinese_character}
            </Text>
            <Text style={styles.example_sentence}>
              {currentHskWordData.pinyin}
            </Text>
            <Text style={styles.example_chinese_sentence}>
              {currentHskWordData.chinese_sentence_1}
            </Text>
            <Text style={styles.example_chinese_sentence}>
              {currentHskWordData.pinyin_sentence_1}
            </Text>
            <Text style={styles.example_english_sentence}>
              {currentHskWordData.english_sentence_1}
            </Text>
          </View>
        </View>
        <Button
          title="Flip Card"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
        />
      </Card>
    );
  }
}

export default StudyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  cardContainer: {
    // flex: 1,
    height: "95%",
    // justifyContent: "center",
    backgroundColor: "white"
  },
  bottomCardSectionContainer: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  studyTextContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  chinese_character: {
    fontSize: 32,
    marginTop: "2%",
    marginBottom: "5%"
  },
  example_chinese_sentence: {
    fontSize: 20,
    marginBottom: "5%"
  },
  example_english_sentence: {
    fontSize: 14,
    marginBottom: "5%"
  },
  flip_card_button_container: {
    
  }
});

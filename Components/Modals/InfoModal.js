import React, {Component} from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Icon } from 'react-native-elements'


class InfoModal extends React.Component {
    render() {
      return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff', marginTop: 75}}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => console.log('hello')} />
                <Text style={{ fontSize: 30 }}>HSK Learning App</Text>
                <Text>Here you will be able to train your memory and character recognition
                    for all different HSK levels (1-6).
                </Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
            </View>
        </SafeAreaView>
      );
    }
}

export default InfoModal;
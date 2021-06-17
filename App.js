import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Text>Handling Text Input</Text>
        <TextInput placeholder={"Enter your name"}
          onChangeText={(e) => { console.warn(e) }}
        ></TextInput>
      </View>


    )
  }
}


export default App;
import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: ""
    }
  }

  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>
        <TextInput placeholder={"Enter your name"}
          onChangeText={(e) => { this.setState({ name: e }) }}
        ></TextInput>
        <Button title="Submit" onPress={() => { alert(this.state.name) }} />
      </View>


    )
  }
}


export default App;
import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      address: ''
    }
  }


  render() {
    return (
      <View>
        <Text>Simple Form</Text>
        <TextInput placeholder="Enter Name"
          onChangeText={(text) => { this.setState({ name: text }) }}
        // style={styles.textBox}
        />

        <TextInput placeholder="Enter Password"
          onChangeText={(text) => { this.setState({ password: text }) }}
        // style={styles.textBox}
        />

        <TextInput placeholder="Enter Address"
          onChangeText={(text) => { this.setState({ address: text }) }}
        // style={styles.textBox}
        />
      </View>
    )
  }
}


export default App;
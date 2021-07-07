import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      address: ''
    }
  }
  submit() {
    console.warn(this.state);
  }


  render() {
    return (
      <View>
        <Text>Simple Form</Text>
        <TextInput placeholder="Enter Name"
          onChangeText={(text) => { this.setState({ name: text }) }}
          style={styles.textBox}
        />

        <TextInput placeholder="Enter Password"
          onChangeText={(text) => { this.setState({ password: text }) }}
          secureTextEntry={true}
          style={styles.textBox}
        />

        <TextInput placeholder="Enter Address"
          onChangeText={(text) => { this.setState({ address: text }) }}
          style={styles.textBox}
        />

        <Button onPress={() => { this.submit() }} title="Submit" />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  textBox: {
    borderColor: 'skyblue',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 20
  }
})

export default App;
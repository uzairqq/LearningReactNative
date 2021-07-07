import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';


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
    console.warn("all values", this.state);
  }


  render() {
    return (

      <View>
        <Text>SIMPLE FORM</Text>
        <TextInput placeholder="Enter Name"
          onChangeText={(text) => { this.setState({ name: text }) }}
          style={styles.textBox}
        />
        <TextInput placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={(text) => { this.setState({ password: text }) }}
          style={styles.textBox}
        />
        <TextInput placeholder="Enter Address"
          onChangeText={(text) => { this.setState({ address: text }) }}
          style={styles.textBox}
        />
        <Button title="Submit" onPress={() => this.submit()} />
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
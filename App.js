import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "App State Data"
    }
  }


  changeStateMethod() {
    this.setState({ data: "Update State data" })
  }
  render() {


    return (

      <View>
        <Text>
          {this.state.data}
        </Text>
        <Button title="Please Change State" onPress={() => this.changeStateMethod()}></Button>
      </View>
    )
  }
}



export default App;

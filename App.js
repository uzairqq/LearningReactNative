import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';





class App extends Component {

  constructor() {
    super();
    this.state = {
      data: "App Some Data"
    }
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.data}
        </Text>
        <Button title="Update State" onPress={() => this.setState({ data: "Change State Data" })}></Button>
      </View >
    )
  }
}


export default App;

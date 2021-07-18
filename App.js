import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';


class App extends Component {




  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 50, backgroundColor: 'red' }}></View>
        <View style={{ flex: 1, backgroundColor: 'green' }}></View>
        <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
      </View>
    )
  }
}

export default App;
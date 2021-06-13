import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class App extends Component {
  render() {
    return (

      <View>

        <Text style={[styles.color, styles.font]} >
          Text1
        </Text>
        <Text style={[styles.otherColor, styles.font]} >
          Text2
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  color: {
    color: 'green',
    backgroundColor: 'yellow',

  },
  font: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  otherColor: {
    color: 'blue'
  }
})



export default App;

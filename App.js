import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class App extends Component {
  render() {
    return (
      <View>
        <Text style={{ color: 'red', backgroundColor: 'green' }}>Text 1</Text>
        <Text style={styles.text2}>Text 2</Text>
        <Text style={[styles.color, styles.font]}>Text 3</Text>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  text2: {
    color: 'blue',
    backgroundColor: 'yellow'
  },

  color: {
    backgroundColor: 'blue',
    color: 'red'
  },
  font: {
    fontSize: 30,
    fontStyle: 'normal'
  }
})




export default App;

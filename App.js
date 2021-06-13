import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class App extends Component {
  render() {
    return (

      <View>
        <Text style={{ color: 'red' }}>
          Text 1
        </Text>
        <Text style={{ fontSize: 30 }}>
          Text 2
        </Text>
        <Text style={styles.text3} >
          Text 3
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text3: {
    color: 'green',
    fontSize: 40,
    backgroundColor: 'yellow'
  }
})



export default App;

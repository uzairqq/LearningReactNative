import React from 'react';
import { View, Text } from 'react-native';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  let data = "Some Amount of data in PROPS"
  return (
    <View>
      <Text>Hello From React Native</Text>
      {/* <Login /> */}
      <Home data={data} />
    </View>
  );
};

export default App;

import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = (props) => {
    console.warn(props)
    return (
        <View>
            <Text>
                Home Component{"\n"}
                {props.data}
            </Text>
        </View>
    )
}


export default Home;
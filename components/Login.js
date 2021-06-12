import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Login extends Component {
    render() {
        return (
            <View>
                <Text>
                    This is Class Based Component
                </Text>
                <Button title="Login Click Me!!" onPress={() => alert("This is Login Class Based Component")} />
            </View>
        )
    }
}

export default Login;
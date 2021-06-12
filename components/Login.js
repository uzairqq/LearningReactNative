import React from 'react';
import { View, Text, Button } from 'react-native';

const Login = () => {
    return (
        <View>
            <Text>
                Login Screens
            </Text>
            <Button title="Login" onPress={() => alert("Hi, This is Function Component Login Button")}>Login</Button>
        </View >
    )
}

export default Login;
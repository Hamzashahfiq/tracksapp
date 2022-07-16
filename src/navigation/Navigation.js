import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Track from '../screens/track/Track';

export default class Navigation extends Component {
    render() {
        const Stack = createNativeStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Track" component={Track} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
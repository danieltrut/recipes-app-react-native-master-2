import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuContainer from '../screens/MenuContainer/MenuContainer';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function ScreenDisplay() {
    return (

        <MenuContainer />
    );
}
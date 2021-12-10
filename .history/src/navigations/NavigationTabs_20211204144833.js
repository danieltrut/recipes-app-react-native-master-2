import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, Button, View } from 'react-native';

const Stack = createStackNavigator();

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Show me the Details screen"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function Details({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is the Details page</Text>
            <Button
                title="Back to the Home Screen"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
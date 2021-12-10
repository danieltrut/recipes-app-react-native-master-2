import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    container: 10,

});

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <HomeScreen />
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

export default function NavigationTabs() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
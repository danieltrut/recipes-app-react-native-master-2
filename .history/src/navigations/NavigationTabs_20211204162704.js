import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import MenuContainer from '../screens/MenuContainer/MenuContainer';
import styles from "./styles";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
        <View>

        </View>
    );
}

export default function ScreenDisplay() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Categories' component={CategoriesScreen} />
                <Stack.Screen name='Recipe' component={RecipeScreen} />
                <Stack.Screen name='RecipesList' component={RecipesListScreen} />
                <Stack.Screen name='Ingredient' component={IngredientScreen} />
                <Stack.Screen name='Search' component={SearchScreen} />
                <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
                <Stack.Screen name='Details' component={Details} />

            </Stack.Navigator>

        </NavigationContainer>
    );
}
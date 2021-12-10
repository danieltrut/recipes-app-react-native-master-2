import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList, Text, View, Image, TouchableHighlight, Button } from 'react-native';
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


import { categories } from "../data/dataArrays";
import { getNumberOfRecipes } from "../data/MockDataAPI";
import MenuImage from "../components/MenuImage/MenuImage";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                title="Show me the Details screen"
                onPress={() => navigation.navigate('Categories')}
            />
        </View>
    );
}

function Categories({ navigation }) {
    const onPressCategory = (item) => {
        const title = item.name;
        const category = item;
        navigation.navigate("RecipesList", { category, title });
    };

    const renderCategory = ({ item }) => (
        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressCategory(item)}>
            <View style={styles.categoriesItemContainer}>
                <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
                <Text style={styles.categoriesName}>{item.name}</Text>
                <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
            </View>
        </TouchableHighlight>
    );

    return (
        <View>
            <FlatList data={categories} renderItem={renderCategory} keyExtractor={(item) => `${item.id}`} />
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
                <Stack.Screen name='Details' component={Categories} />

            </Stack.Navigator>

        </NavigationContainer>
    );
}
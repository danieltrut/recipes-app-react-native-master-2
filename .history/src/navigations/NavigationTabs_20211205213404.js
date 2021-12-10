import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList, Text, View, Image, TouchableHighlight, Button, ScrollView } from 'react-native';
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
import { recipes } from "../data/dataArrays";


import { categories } from "../data/dataArrays";
import { getNumberOfRecipes } from "../data/MockDataAPI";
import MenuImage from "../components/MenuImage/MenuImage";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home({ navigation }) {

    const onPressRecipe = (item) => {
        navigation.navigate("Recipe", { item });
    };

    const renderRecipes = ({ item }) => (
        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
            <View style={styles.container}>
                <Image style={styles.photo} source={{ uri: item.photo_url }} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
            </View>
        </TouchableHighlight>
    );
    const renderRecipesHorizontal = ({ item }) => (
        <TouchableHighlight style={{}} onPress={() => onPressRecipe(item)}>
            <View style={{ marginBottom: 0, marginLeft: 30, marginRight: -5, display: 'flex' }}>
                <Image style={styles.photo} source={{ uri: item.photo_url }} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableHighlight>

    );

    const renderRecipesHorizontalFastToMake = ({ item }) => (
        <TouchableHighlight style={{}} onPress={() => onPressRecipe(item)}>
            <View style={{ marginBottom: 0, marginLeft: 30, marginRight: -5, display: 'flex' }}>
                <Image style={styles.photo} source={{ uri: item.photo_url }} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableHighlight>

    );

    const renderRecipesHorizontalBreakfast = ({ item }) => (
        <TouchableHighlight style={{}} onPress={() => onPressRecipe(item)}>
            <View style={{ marginBottom: 0, marginLeft: 30, marginRight: -5, display: 'flex' }}>
                <Image style={styles.photo} source={{ uri: item.photo_url }} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableHighlight>

    );


    return (
        <View>
            <ScrollView>
                <Text style={{ fontWeight: 'bold', marginRight: 30, marginLeft: 30, fontSize: 18, marginTop: 20, marginBottom: 20 }}>Popular</Text>
                <ScrollView pagingEnabled >
                    <FlatList horizontal={true} showsHorizontalScrollIndicator={false} numColumns={1} data={recipes} renderItem={renderRecipesHorizontal} keyExtractor={(item) => `${item.recipeId}`} />
                </ScrollView>

                <Text style={{ fontWeight: 'bold', marginRight: 30, marginLeft: 30, fontSize: 18, marginTop: 30, marginBottom: 20 }}>Fast To Make</Text>
                <ScrollView pagingEnabled >
                    <FlatList horizontal={true} showsHorizontalScrollIndicator={false} numColumns={1} data={recipes} renderItem={renderRecipesHorizontalFastToMake} keyExtractor={(item) => `${item.recipeId}`} />
                </ScrollView>

                <Text style={{ fontWeight: 'bold', marginRight: 30, marginLeft: 30, fontSize: 18, marginTop: 30, marginBottom: 20 }}>Breakfast</Text>
                <ScrollView pagingEnabled style={{ paddingBottom: 60, }}>
                    <FlatList horizontal={true} showsHorizontalScrollIndicator={false} numColumns={1} data={recipes} renderItem={renderRecipesHorizontalBreakfast} keyExtractor={(item) => `${item.recipeId}`} />
                </ScrollView>

            </ScrollView>
            <View style={styles.menuContainer}>
                <TouchableHighlight onPress={() => navigation.navigate('Home')} >
                    <View style={styles.btnContainer}>
                        <Image source={require("../../assets/icons/home.png")} style={styles.btnIcon} />
                        <Text style={styles.btnText}>Home</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Search')} style={styles.btnClickContain}>
                    <View style={styles.btnContainer}>
                        <Image source={require("../../assets/icons/search.png")} style={styles.btnIcon} />
                        <Text style={styles.btnText}>Search</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Categories')} style={styles.btnClickContain}>
                    <View style={styles.btnContainer}>
                        <Image source={require("../../assets/icons/category.png")} style={styles.btnIcon} />
                        <Text style={styles.btnText}>Category</Text>
                    </View>
                </TouchableHighlight>
            </View>

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
            <Stack.Navigator initialRouteName="Home" style={{ marginLeft: 10 }}>
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
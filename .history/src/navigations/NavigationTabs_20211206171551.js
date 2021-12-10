import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList, Text, View, Image, TouchableHighlight, Button, ScrollView } from 'react-native';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import styles from "./styles";
import { recipes } from "../data/dataArrays";
import { categories } from "../data/dataArrays";
import { getNumberOfRecipes } from "../data/MockDataAPI";


/* 
    Siin asuvad menüü jaoks vajalikud komponendid
    Nb! Menüü asub ainult esivaadel    
*/

/* 
    Esivaade
*/

function Home({ navigation }) {

    /* 
        Item Modelid - mis asuvad swipping konteinerites 
    */

    const onPressRecipe = (item) => {
        navigation.navigate("Recipe", { item });
    };
    const renderRecipesHorizontal = ({ item }) => (
        <TouchableHighlight underlayColor="transparent" onPress={() => onPressRecipe(item)}>
            <View style={{ marginBottom: 0, marginLeft: 30, marginRight: -5, display: 'flex' }}>
                <Image style={styles.photo} source={{ uri: item.photo_url }} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableHighlight>
    );
    const renderRecipesHorizontalFastToMake = ({ item }) => (
        <TouchableHighlight underlayColor="transparent" onPress={() => onPressRecipe(item)}>
            <View style={{ marginBottom: 0, marginLeft: 30, marginRight: -5, display: 'flex' }}>
                <Image style={styles.photo} source={{ uri: item.photo_url }} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableHighlight>
    );
    const renderRecipesHorizontalBreakfast = ({ item }) => (
        <TouchableHighlight underlayColor="transparent" onPress={() => onPressRecipe(item)}>
            <View style={{ marginBottom: 0, marginLeft: 30, marginRight: -5, display: 'flex' }}>
                <Image style={styles.photo} source={{ uri: item.photo_url }} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableHighlight>
    );

    /* 
        Esivaades olemasolevad - swipping konteinerid
     */

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
                <ScrollView pagingEnabled style={{ paddingBottom: 80, }}>
                    <FlatList horizontal={true} showsHorizontalScrollIndicator={false} numColumns={1} data={recipes} renderItem={renderRecipesHorizontalBreakfast} keyExtractor={(item) => `${item.recipeId}`} />
                </ScrollView>
            </ScrollView>

            {/*
                Menüü, mis asub esivaadel
             */}

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


/* 
    Kategooriate vaade
*/

function Categories({ navigation }) {
    const onPressCategory = (item) => {
        const title = item.name;
        const category = item;
        navigation.navigate("RecipesList", { category, title });
    };

    /*
        Kategooriate model 
    */

    const renderCategory = ({ item }) => (
        <TouchableHighlight onPress={() => onPressCategory(item)}>
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

const Stack = createStackNavigator();

export default function ScreenDisplay() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Details' component={Categories} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
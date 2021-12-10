import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, ScrollView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";

function DetailsScreen() {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <MenuImage
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                />
            ),
            headerRight: () => <View />,
        });
    }, []);

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
                <ScrollView pagingEnabled style={{ paddingBottom: 30, }}>
                    <FlatList horizontal={true} showsHorizontalScrollIndicator={false} numColumns={1} data={recipes} renderItem={renderRecipesHorizontalBreakfast} keyExtractor={(item) => `${item.recipeId}`} />
                </ScrollView>
            </ScrollView>
        </View>

    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
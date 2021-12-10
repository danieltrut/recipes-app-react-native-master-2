import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, ScrollView, Button } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";


export default function HomeScreen(props) {
  const { navigation } = props;


  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };


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

    </View>


  );
}

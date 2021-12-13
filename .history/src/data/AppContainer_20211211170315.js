import React, { Component } from 'react';
import ApiView from './ApiView';
import styles from './styles';
import { getNumberOfRecipes } from "./MockDataAPI";
import axios from 'axios';
import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
class ApiContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            fromFetch: false,
            fromAxios: false,
            dataSource: [],
            axiosData: null
        };
    }
    goForFetch = () => {
        this.setState({
            fromFetch: true,
            loading: true,

        })
        fetch("http://192.168.1.200:3000/category")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from fetch', responseJson)
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error => console.log(error))
    }
    goForAxios = () => {
        this.setState({
            fromFetch: false,
            loading: true,

        })
        axios.get("http://192.168.1.200:3000/category")
            .then(response => {
                console.log('getting data from axios', response.data);
                this.setState({
                    loading: false,
                    axiosData: response.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
    FlatListSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.8)",
            }}
            />
        );
    }
    renderItem = (data) => {
        return (
            <TouchableOpacity >
                <Text style={{ paddingTop: 30 }}>{data.item.name}</Text>
                <Image style={{ width: 30, height: 30 }} source={{ uri: data.item.photo_url }} />
                <Image style={styles.categoriesPhoto} source={{ uri: data.item.photo_url }} />
                <Text style={styles.categoriesName}>{data.item.name}</Text>
            </TouchableOpacity>
        )

    }

    renderCategory = ({ item }) => (
        <TouchableHighlight underlayColor="rgba(73,182,77,0.2)" onPress={() => onPressCategory(tem)}>
            <View style={styles.categoriesItemContainer}>
                <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
                <Text style={styles.categoriesName}>{data.item.name}</Text>
                <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
            </View>
        </TouchableHighlight>
    );


    render() {
        const { dataSource, fromFetch, fromAxios, loading, axiosData } = this.state
        return (
            <ApiView
                goForFetch={this.goForFetch}
                goForAxios={this.goForAxios}
                dataSource={dataSource}
                loading={loading}
                fromFetch={fromFetch}
                fromAxios={fromAxios}
                axiosData={axiosData}
                FlatListSeparator={this.FlatListSeparator}
                renderItem={this.renderItem}
            />
        );
    }
}

export default ApiContainer;
import React, { Component } from 'react';
import ApiView from './ApiView';
import styles from './styles';

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
        fetch("http://192.168.1.200:3000/recipes/recipes")
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
        axios.get("http://192.168.1.200:3000/recipes/recipes")
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
                <View style={{ marginBottom: 0, marginLeft: 30, marginRight: -5, display: 'flex' }}>
                    <Image style={styles.photo} source={{ uri: data.item.photo_url }} />
                    <Text style={styles.title}>{data.item.title}</Text>
                </View>

            </TouchableOpacity>
        )

    }




    render() {
        const { dataSource, fromFetch, fromAxios, loading, axiosData } = this.state
        return (
            <ApiView

                goForAxios={this.goForAxios}
                dataSource={dataSource}
                loading={loading}

                fromAxios={fromAxios}
                axiosData={axiosData}
                FlatListSeparator={this.FlatListSeparator}
                renderItem={this.renderItem}
            />
        );
    }
}

export default ApiContainer;
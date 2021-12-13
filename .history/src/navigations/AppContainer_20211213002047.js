import React, { Component, useState } from 'react';
import ApiView from './ApiView';
import styles from './styles';
import axios from 'axios';
import Dialog, { SlideAnimation, DialogButton, DialogTitle, DialogContent } from 'react-native-popup-dialog';
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
            onPressRecipe: null,
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


    onPressRecipe = (data) => {
        navigation.navigate("Recipe", { data });
    };

    renderItem = (data) => {

        this.photo = data.photo_url
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    this.setState({ visible: true });

                }}>

                    <View style={{ marginBottom: 0, marginLeft: 30, marginRight: -5, display: 'flex' }}>
                        <Image style={styles.photo} source={{ uri: data.photo_url }} />
                        <Text style={styles.title}>{data.item.title}</Text>

                        <Dialog
                            visible={this.state.visible}

                            dialogAnimation={new SlideAnimation({
                                slideFrom: 'bottom',
                            })}
                        >
                            <DialogTitle title={data.item.title} />
                            <DialogContent style={{ flex: 1 }}>
                                <DialogButton
                                    text="Close"
                                    onPress={() => {
                                        this.setState({ visible: false });
                                    }}
                                />
                                <Image style={styles.photo} source={{ uri: this.photo }} />
                                <Text style={styles.title}>{data.item.title}</Text>
                            </DialogContent>
                        </Dialog>
                    </View>

                </TouchableOpacity>

            </View>




        )

    }

    renderItemTwo = (data) => {


        return (
            <View>
                <TouchableOpacity onPress={() => {
                    this.setState({ visible: true });
                }}>

                    <View style={{ marginBottom: 0, marginLeft: 30, marginRight: -5, display: 'flex' }}>
                        <Image style={styles.photo} source={{ uri: data.item.photo_url }} />
                        <Text style={styles.title}>{data.item.title}</Text>

                        <Dialog
                            visible={this.state.visible}

                            dialogAnimation={new SlideAnimation({
                                slideFrom: 'bottom',
                            })}
                        >
                            <DialogTitle title={data.item.title} />
                            <DialogContent style={{ flex: 1 }}>
                                <DialogButton
                                    text="Close"
                                    onPress={() => {
                                        this.setState({ visible: false });
                                    }}
                                />
                                <Image style={styles.photo} source={{ uri: data.item.photo_url }} />
                                <Text style={styles.title}>{data.item.title}</Text>
                            </DialogContent>
                        </Dialog>
                    </View>

                </TouchableOpacity>

            </View>
        )

    }




    render() {
        const { dataSource, fromFetch, onPressRecipe, fromAxios, loading, axiosData } = this.state
        return (
            <ApiView

                goForAxios={this.goForAxios}
                dataSource={dataSource}
                loading={loading}
                onPressRecipe={this.onPressRecipe}
                fromAxios={fromAxios}
                axiosData={axiosData}
                FlatListSeparator={this.FlatListSeparator}
                renderItem={this.renderItem}
                renderItemTwo={this.renderItemTwo}
            />
        );
    }
}

export default ApiContainer;
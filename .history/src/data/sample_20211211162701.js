import React, { Component } from 'react';
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

class Sample extends Component {
    state = { data: [] };
    componentWillMount() {
        this.setState({ data: inputObject });
    }
    render() {
        return (
            <View>
            //you can render the data here
            </View>
        );
    }
}
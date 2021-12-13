import React, { Component } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
const ApiView = (props) => {
    const { goForFetch, goForAxios, fromFetch, fromAxios, axiosData, renderItem, FlatListItemSeparator, dataSource, loading } = props
    return (
        <View style={styles.parentContainer}>
            <View style={{ margin: 18 }}>
                <Button
                    title={'Click using Fetch'}
                    onPress={goForFetch}
                    color='green'
                />
            </View>
            <View style={{ margin: 18 }}>
                <Button
                    title={'Click using axios'}
                    onPress={goForAxios}
                    color='green'
                />
            </View>


            {fromFetch ?
                <FlatList
                    data={dataSource}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                /> : <FlatList
                    data={axiosData}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
            }
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text>Fetching Data</Text>
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252526",
        alignItems: "center",
        justifyContent: "center",
        marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    },
    formHeading: {
        color: "#ffffff",
    },
    wrapper: {
        marginBottom: 10,
    },
    input: {
        borderWidth: 2,
        borderColor: "grey",
        minWidth: 200,
        textAlignVertical: "center",
        paddingLeft: 10,
        borderRadius: 20,
        color: "#ffffff",
    },
    submitButton: {
        backgroundColor: "gray",
        padding: 100,
    },
});

export default ApiView;
import React, { Component } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator, Image } from 'react-native';

const ApiView = (props) => {
    const { goForFetch, goForAxios, fromFetch, fromAxios, axiosData, renderItem, renderItemTwo, FlatListItemSeparator, dataSource, loading } = props
    return (
        <View >
            <View >
                {/* <Button
                    title={'Click using Fetch'}
                    onPress={goForFetch}
                    color='green'
                /> */}
            </View>
            <View>
                {/* <Button
                    title={'Click using axios'}
                    onPress={goForAxios}
                    color='green'

                /> */}
                <Image onLoadStart={goForFetch} />
                <Image onLoadStart={goForAxios} />
            </View>


            {fromAxios ?
                <FlatList horizontal={true} showsHorizontalScrollIndicator={false} numColumns={1}
                    data={dataSource}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    renderItemTwo={item => renderItemTwo(item)}
                    keyExtractor={item => item.id}


                /> : <FlatList horizontal={true} showsHorizontalScrollIndicator={false} numColumns={1}
                    data={axiosData}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    renderItemTwo={item => renderItemTwo(item)}
                />
            }
            {loading &&
                <View >
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text>Fetching Data</Text>
                </View>
            }
        </View>
    )
}

export default ApiView;
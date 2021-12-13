/* import React from 'react';
import ScreenDisplay from './src/navigations/NavigationTabs';

export default function App() {
  return (
    <ScreenDisplay />
  );
}

 */
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Image,
  Platform,
} from "react-native";
import Constants from "expo-constants";
const baseUrl = "http://192.168.1.200:3000";
function Category({ categoryObject }) {
  return (
    <View>
      <Image
        source={{ uri: categoryObject.photo_url }}
        style={{ width: 128, height: 128, borderRadius: 64 }}
      />
      <Text style={{ textAlign: "center", color: "white" }}>
        {`${categoryObject.name}`}
      </Text>
    </View>
  );
}
export default function App() {
  const [categoryId, setUserId] = useState(1);
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);
  const changeUserIdHandler = () => {
    setUserId((categoryId) => (categoryId === 3 ? 1 : categoryId + 1));
  };
  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `${baseUrl}/category`;
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setCategory(response.data.data);
          setIsLoading(false);
          return;
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Data fetching cancelled');
        } else {
          setErrorFlag(true);
          setIsLoading(false);
        }
      }
    };
    fetchUsers();
    return () => source.cancel("Data fetching cancelled");
  }, [categoryId]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.wrapperStyle}>
        {!isLoading && !hasError && category && <Category categoryObject={category} />}
      </View>
      <View style={styles.wrapperStyle}>
        {isLoading && <Text> Loading </Text>}
        {!isLoading && hasError && <Text> An error has occurred </Text>}
      </View>
      <View>
        <Button
          title="Load user"
          onPress={changeUserIdHandler}
          disabled={isLoading}
          style={styles.buttonStyles}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  wrapperStyle: {
    minHeight: 128,
  },
  buttonStyles: {
    padding: 100,
  },
});
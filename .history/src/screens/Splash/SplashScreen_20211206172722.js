import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, }} >Logo</Text>
      <Image style={styles.photo} source={require("../../../assets/icons/cookie100.png")} />
    </View>
  );
}

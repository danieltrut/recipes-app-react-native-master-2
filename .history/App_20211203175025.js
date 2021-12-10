import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import AppBlock from './src/navigations/BottomNavigation';


export default function App() {
  return (
    <View>
      <AppContainer />
      <AppBlock />s
    </View>

  );
}

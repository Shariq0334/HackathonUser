import React, {
  useState,
  useEffect
} from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  auth,
  onAuthStateChanged
} from './src/config/Firebase/Firebase';
import MainStack from './src/config/Navigators/mainStack';

export default function App() {
  return(
    <NavigationContainer style={styles.container}>
      <MainStack />
    </NavigationContainer>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
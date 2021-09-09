/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import SplashNavigator from './src/Splash/SplashNavigator';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

// import ScanScreen from './src/ScanScreen';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  // return <Scan />;
  return (
    // <SafeAreaProvider>
    <SplashNavigator />
    // </SafeAreaProvider>
  );
};

export default App;

/* eslint-disable quotes */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from "@react-navigation/drawer";
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../Splash/SplashScreen';
import HomeScreen from '../Containers/Screen/HomeScreen';

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const SplashNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{animationEnabled: false, header: () => null}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{animationEnabled: true, header: () => null}}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SplashNavigator;

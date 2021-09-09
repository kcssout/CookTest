import * as React from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';

function HomeScreen({}) {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'Home', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;

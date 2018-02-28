import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HomeContainer from './app/Containers/HomeContainer.js';
import SettingsContainer from './app/Containers/SettingsContainer.js';
import PopularContainer from './app/Containers/PopularContainer.js';
import SavedContainer from './app/Containers/SavedContainer.js';
import SummaryContainer from './app/Containers/SummaryContainer.js';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

export default TabNavigator({
    Home: { screen: HomeContainer },
    Popular: { screen: PopularContainer },
    Saved: { screen: SavedContainer },
    Settings: { screen: SettingsContainer},
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <Ionicons size={25} color={tintColor} />;
        
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import NavigationDemo from './src/demo/NavigationDemo';
import HomePage from './src/page/HomePage';
import NavigationHello from './src/demo/NavigationDemo/NavigationHello';

export default createAppContainer(
    createStackNavigator({
        Home: HomePage,
        ReactNavigation: NavigationDemo,
        NavigationHello: NavigationHello
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderBottomColor: '#EEEEEE',
                borderBottomWidth: 1
            },
        }
    })
);
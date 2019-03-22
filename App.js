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
import HeartBeatBottomNavi from './src/demo/NavigationDemo/Custom/BottomNavigation/HeartBeatBottomNavi';
import ReactNativeUiDemo from './src/demo/ReactNativeUIDemo';
import ReactNativeUIImage from './src/demo/ReactNativeUIDemo/demos/ReactNativeUIImage';
import ReduxDemo from './src/demo/ReduxDemo'
import ReduxTodo from './src/demo/ReduxDemo/demos/ReduxTodo'
import YogaDemo from './src/demo/YogaDemo'

export default createAppContainer(
    createStackNavigator({
        Home: HomePage,
        ReactNavigation: NavigationDemo,
        NavigationHello: NavigationHello,
        HeartBeatBottomNavi: HeartBeatBottomNavi,
        ReactNativeUiDemo: ReactNativeUiDemo,
        ReactNativeUIImage: ReactNativeUIImage,
        // Redux Demo
        ReduxDemo: ReduxDemo,
        ReduxTodo: ReduxTodo,
        // Yoga Demo
        YogaDemo: YogaDemo
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
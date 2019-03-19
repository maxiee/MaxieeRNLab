import React from "react";
import { Text, View } from 'react-native';
import HeartBeatBottomNavigation from "./HeartBeatBottomNavigation";
import {createBottomTabNavigator} from 'react-navigation'

// import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue'
// MessageQueue.spy(true)

let tab1 = () => <View><Text>Tab 1</Text></View>
let tab2 = () => <View><Text>Tab 2</Text></View>
let tab3 = () => <View><Text>Tab 3</Text></View>
let tab4 = () => <View><Text>Tab 4</Text></View>

export default createBottomTabNavigator(
    {
        tab1: tab1,
        tab2: tab2,
        tab3: tab3,
        tab4: tab4
    },
    {
        tabBarComponent: HeartBeatBottomNavigation,
    }
)
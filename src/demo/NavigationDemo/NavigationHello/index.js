import React from "react";
import { View } from 'react-native'
import Markdown from "react-native-markdown-renderer";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DocHelloNavigation from "../doc/DocHelloNavigation";

let DocComp = () => <View style={{margin: 10}}>
    <Markdown>{DocHelloNavigation}</Markdown>
</View>

let CodeComp = () => <View style={{margin: 10}}></View>

const Tab = createMaterialTopTabNavigator();

export default () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Show"
                component={CodeComp} />
            <Tab.Screen
                name="Doc"
                component={DocComp} />
        </Tab.Navigator>
    )
} 
    
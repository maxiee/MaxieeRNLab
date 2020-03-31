import React from "react";
import { Text, View } from 'react-native';
import HeartBeatBottomNavigation from "./HeartBeatBottomNavigation";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

let tab1 = () => <View><Text>Tab 1</Text></View>
let tab2 = () => <View><Text>Tab 2</Text></View>
let tab3 = () => <View><Text>Tab 3</Text></View>
let tab4 = () => <View><Text>Tab 4</Text></View>

const TAB = createBottomTabNavigator();

export default () => {
    return (
        <TAB.Navigator>
            <TAB.Screen
                name="tab1"
                component={tab1} />
            <TAB.Screen
                name="tab2"
                component={tab2} />
            <TAB.Screen
                name="tab3"
                component={tab3} />
            <TAB.Screen
                name="tab4"
                component={tab4} />
        </TAB.Navigator>
    )
}
// export default createBottomTabNavigator(
//     {
//         tab1: tab1,
//         tab2: tab2,
//         tab3: tab3,
//         tab4: tab4
//     },
//     {
//         tabBarComponent: HeartBeatBottomNavigation,
//     }
// )
import React, {PureComponent} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MTHomeScene from './home/MTHomeScene';
import TabBarItem from '../../../widgets/tab/bottom/TabBarItem';
import { MTMineScene } from './mine/MTMineScene';
import MTNearbyScene from './nearby/MTNearbyScene';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Home"
                            component={MTHomeScene} />
                    </Stack.Navigator>
                } />
            <Tab.Screen
                name="Nearby"
                component={
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Nearby"
                            component={MTNearbyScene} />
                    </Stack.Navigator>
                } />
            <Tab.Screen
                name="Mine"
                component={
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Mine"
                            component={MTMineScene} />
                    </Stack.Navigator>
                } />
        </Tab.Navigator>
    )

}

// const Tab = createBottomTabNavigator({
//     Home: {
//         screen: createStackNavigator({Home: MTHomeScene}),
//         navigationOptions: {
//             tabBarLabel: '团购',
//             tabBarIcon: ({focused, tintColor}) => (
//                 <TabBarItem
//                     tintColor={tintColor}
//                     focused={focused}
//                     normalImage={require('./img/tabbar/tabbar_homepage.png')}
//                     selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
//                 />
//             )
//         }
//     },
//     Nearby: {
//         screen: createStackNavigator({Nearby: MTNearbyScene}),
//         navigationOptions: {
//             tabBarLabel: '附近',
//             tabBarIcon: ({focused, tintColor}) => (
//                 <TabBarItem
//                     tintColor={tintColor}
//                     focused={focused}
//                     normalImage={require('./img/tabbar/tabbar_merchant.png')}
//                     selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
//                 />
//             )
//         }
//     },
//     Mine: {
//         screen: createStackNavigator({Mine: MTMineScene}),
//         navigationOptions: {
//             tabBarLabel: '我的',
//             tabBarIcon: ({ focused, tintColor }) => (
//                 <TabBarItem
//                     tintColor={tintColor}
//                     focused={focused}
//                     normalImage={require('./img/tabbar/tabbar_mine.png')}
//                     selectedImage={require('./img/tabbar/tabbar_mine_selected.png')} />
//             )
//         }
//     }
// }, {
//     lazy: true,
//     animationEnabled: false,
//     swipeEnabled: false
// })

// Tab.navigationOptions = {
//     header: null
// }

// export default Tab;
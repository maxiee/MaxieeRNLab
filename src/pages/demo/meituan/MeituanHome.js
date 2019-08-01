import React, {PureComponent} from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import MTHomeScene from './home/MTHomeScene';
import TabBarItem from '../../../widgets/tab/bottom/TabBarItem';
import { MTMineScene } from './mine/MTMineScene';

const Tab = createBottomTabNavigator({
    Home: {
        screen: createStackNavigator({ Home: MTHomeScene}),
        navigationOptions: {
            tabBarLabel: '团购',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/tabbar_homepage.png')}
                    selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
                />
            )
        }
    },
    Nearby: {
        screen: MTHomeScene,
        navigationOptions: {
            tabBarLabel: '附近',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/tabbar_merchant.png')}
                    selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
                />
            )
        }
    },
    Mine: {
        screen: MTMineScene,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/tabbar_mine.png')}
                    selectedImage={require('./img/tabbar/tabbar_mine_selected.png')} />
            )
        }
    }
})

Tab.navigationOptions = {
    header: null,
};

export default Tab;
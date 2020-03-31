import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeBasic from './HomeBasic';
import DemoSimpleView from '../../demo/ReactNativeUIDemo/DemoSimpleView';
import DemoButton from '../../demo/ReactNativeUIDemo/DemoButton';
import DemoLogin1 from '../../demo/LoginDemo/DemoLogin1';
import ChatDemo from '../../demo/ChatDemo';
import DemoLineChart from '../../demo/ChartDemo/DemoLineChart';
import NavigationHello from '../../demo/NavigationDemo/NavigationHello';
import StackDemo from '../../demo/NavigationDemo/StackDemo'
import HeartBeatBottomNavi from '../../demo/NavigationDemo/Custom/BottomNavigation/HeartBeatBottomNavi';
import ReactNativeUIImage from '../../demo/ReactNativeUIDemo/demos/ReactNativeUIImage';
import ReduxTodo from '../../demo/ReduxDemo/demos/ReduxTodo'
import TemplateHome from '../template/TemplateHome';
import DemoHome from '../demo/DemoHome';
// Demos
import MeituanHome from '../demo/meituan/MeituanHome';
import RNBasicScrollView from '../basic/RNBasicScrollView';
import RNThirdSwiper from '../basic/RNThirdSwiper';
import StopWatchHome from '../demo/StopWatch/StopWatchHome';
import WeatherHome from '../demo/weather/WeatherHome';
import TwitterHome from '../demo/twitter/TwitterHome';
import RNScrollableTabView from '../basic/RNScrollableTabView';
import MyLocationHome from '../demo/mylocation/MyLocationHome';
import CustomHeader from '../../demo/NavigationDemo/CustomHeader';

// const Tab = createBottomTabNavigator({
//     Home: {
//         screen: createStackNavigator({Home: HomeBasic}),
//         navigationOptions: {
//             tabBarLabel: 'Basic'
//         }
//     },
//     Template: {
//         screen: createStackNavigator({Template: TemplateHome}),
//         navigationOptions: {
//             tabBarLabel: 'Template'
//         }
//     },
//     Demo: {
//         screen: createStackNavigator({Demo: DemoHome}),
//         navigationOptions: {
//             tabBarLabel: 'Demo'
//         }
//     }
// });

// Tab.navigationOptions = {
//     header: null
// }

// const AppNavigator = createStackNavigator({
//     Tab: { screen: Tab },
//     DemoSimpleView: DemoSimpleView,
//     // React Navigation
//     NavigationHello: NavigationHello,
//     StackDemo: StackDemo,
//     CustomHeader: CustomHeader,
//     HeartBeatBottomNavi: HeartBeatBottomNavi,
//     ReactNativeUIImage: ReactNativeUIImage,
//     // Redux Demo
//     ReduxTodo: ReduxTodo,
//     DemoButton: DemoButton,
//     DemoLogin1: DemoLogin1,
//     // Chat Demo
//     ChatDemo: ChatDemo,
//     // Charts
//     DemoLineChart: DemoLineChart,  
//     // Demos
//     MeituanHome: MeituanHome,
//     StopWatch: StopWatchHome,
//     Weather: WeatherHome,
//     Twitter: TwitterHome,
//     // RN Basic
//     RNBasicScrollView: RNBasicScrollView,
//     RNScrollableTabView: RNScrollableTabView,
//     // Third Party Widgets
//     RNThirdSwiper: RNThirdSwiper,
//     MyLocation: MyLocationHome,

// }, {
//     defaultNavigationOptions: {
//         headerBackTitle: null,
//         headerTintColor: '#333333',
//         showIcon: true,
//     }
// });

// const AppContainer = createAppContainer(AppNavigator);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeBasic}/>
            <Tab.Screen
                name="Template"
                component={TemplateHome}/>
            <Tab.Screen
                name="Demo"
                component={DemoHome}/>
        </Tab.Navigator>
    )
}

class HomePage extends React.Component {

    render() {
        return <NavigationContainer>
            <Stack.Navigator
                initialRouteName='TAB'>
                <Stack.Screen
                    name="TAB"
                    component={HomeTabs} />
                <Stack.Screen
                    name='DemoSimpleView'
                    component={DemoSimpleView} />
                <Stack.Screen
                    name='NavigationHello'
                    component={NavigationHello} />
                <Stack.Screen
                    name='StackDemo'
                    component={StackDemo} />
                <Stack.Screen
                    name='CustomHeader'
                    component={CustomHeader} />
                <Stack.Screen
                    name='HeartBeatBottomNavi'
                    component={HeartBeatBottomNavi} />
                <Stack.Screen
                    name='ReactNativeUIImage'
                    component={ReactNativeUIImage} />
                <Stack.Screen
                    name='ReduxTodo'
                    component={ReduxTodo} />
                <Stack.Screen
                    name='DemoButton'
                    component={DemoButton} />
                <Stack.Screen
                    name='DemoLogin1'
                    component={DemoLogin1} />
                <Stack.Screen
                    name='ChatDemo'
                    component={ChatDemo} />
                <Stack.Screen
                    name='DemoLineChart'
                    component={DemoLineChart} />
                <Stack.Screen
                    name='MeituanHome'
                    component={MeituanHome} />
                <Stack.Screen
                    name='StopWatch'
                    component={StopWatchHome} />
                <Stack.Screen
                    name='Weather'
                    component={WeatherHome} />
                <Stack.Screen
                    name='Twitter'
                    component={TwitterHome} />
                <Stack.Screen
                    name='RNBasicScrollView'
                    component={RNBasicScrollView} />
                <Stack.Screen
                    name='RNScrollableTabView'
                    component={RNScrollableTabView} />
                <Stack.Screen
                    name='RNThirdSwiper'
                    component={RNThirdSwiper} />
                <Stack.Screen
                    name='MyLocation'
                    component={MyLocationHome} />
            </Stack.Navigator>
        </NavigationContainer>
    }
}

export default HomePage;
import React, {Component} from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
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

const Tab = createBottomTabNavigator({
    Home: {
        screen: createStackNavigator({Home: HomeBasic}),
        navigationOptions: {
            tabBarLabel: 'Basic'
        }
    },
    Template: {
        screen: createStackNavigator({Template: TemplateHome}),
        navigationOptions: {
            tabBarLabel: 'Template'
        }
    },
    Demo: {
        screen: createStackNavigator({Demo: DemoHome}),
        navigationOptions: {
            tabBarLabel: 'Demo'
        }
    }
});

Tab.navigationOptions = {
    header: null
}

const AppNavigator = createStackNavigator({
    Tab: { screen: Tab },
    DemoSimpleView: DemoSimpleView,
    NavigationHello: NavigationHello,
    StackDemo: StackDemo,
    HeartBeatBottomNavi: HeartBeatBottomNavi,
    ReactNativeUIImage: ReactNativeUIImage,
    // Redux Demo
    ReduxTodo: ReduxTodo,
    DemoButton: DemoButton,
    DemoLogin1: DemoLogin1,
    // Chat Demo
    ChatDemo: ChatDemo,
    // Charts
    DemoLineChart: DemoLineChart,  
    // Demos
    MeituanHome: MeituanHome,
    StopWatch: StopWatchHome,
    Weather: WeatherHome,
    Twitter: TwitterHome,
    // RN Basic
    RNBasicScrollView: RNBasicScrollView,
    // Third Party Widgets
    RNThirdSwiper: RNThirdSwiper,

}, {
    defaultNavigationOptions: {
        headerBackTitle: null,
        headerTintColor: '#333333',
        showIcon: true,
    }
});

const AppContainer = createAppContainer(AppNavigator);

class HomePage extends React.Component {
    render() {
        return <AppContainer />
    }
}

export default HomePage;
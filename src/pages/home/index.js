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

const Tab = createBottomTabNavigator({
    Home: {
        screen: HomeBasic,
        navigationOptions: {
            tabBarLabel: 'Basic'
        }
    },
    Template: {
        screen: TemplateHome,
        navigationOptions: {
            tabBarLabel: 'Template'
        }
    },
    Demo: {
        screen: DemoHome,
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
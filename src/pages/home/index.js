import React, {Component} from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import HomeUsage from './HomeUsage';
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

// class HomePage extends React.Component {
//     static navigationOptions = {
//         title: "MaxieeRNLab"
//     }

//     createHeader(title) {
//         return <Text h3 key={title}>{title}</Text>
//     }

//     createLink(title, link) {
//         return <ListItem
//             key={title}
//             title={title}
//             bottomDivider={true}
//             leftIcon={<Icon name='ios-flask' size={24} color={'#999999'} />}
//             onPress={() => {
//                 if (typeof link == 'string') {
//                     this.props.navigation.navigate(link)
//                 } else if (link instanceof Function) {
//                     link();
//                 }
//             }}/>
//     }

//     render() {
//         return <ScrollView style={{padding: 10}}>{[

//         ]}</ScrollView>
//     }
// }

// export default createAppContainer(
//     createStackNavigator({

//     },
//     {
//         defaultNavigationOptions: {
//             headerStyle: {
//                 elevation: 0,
//                 shadowOpacity: 0,
//                 borderBottomColor: '#EEEEEE',
//                 borderBottomWidth: 1
//             },
//         }
//     })
// );

const Tab = createBottomTabNavigator({
    Home: {
        screen: createStackNavigator({ 
            Home: HomeUsage,
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
        }),
        navigationOptions: {
            tabBarLabel: 'RN Usage'
        }
    },
    // Demo: {
    //     navigationOptions: ({ navigation }) => ({
    //         tabBarLabel: 'RN Demo'
    //     })
    // }
});

Tab.navigationOptions = {
    header: null
}

const AppNavigator = createStackNavigator({
    Tab: { screen: Tab },
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
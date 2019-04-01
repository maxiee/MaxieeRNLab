import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import NavigationHello from './src/demo/NavigationDemo/NavigationHello';
import StackDemo from './src/demo/NavigationDemo/StackDemo'
import HeartBeatBottomNavi from './src/demo/NavigationDemo/Custom/BottomNavigation/HeartBeatBottomNavi';
import ReactNativeUIImage from './src/demo/ReactNativeUIDemo/demos/ReactNativeUIImage';
import ReduxTodo from './src/demo/ReduxDemo/demos/ReduxTodo'
import { ScrollView } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import IntentLauncher from 'react-native-intent-launcher';
import DemoSimpleView from './src/demo/ReactNativeUIDemo/DemoSimpleView';
import DemoButton from './src/demo/ReactNativeUIDemo/DemoButton';
import DemoLogin1 from './src/demo/LoginDemo/DemoLogin1';
import ChatDemo from './src/demo/ChatDemo';

class HomePage extends React.Component {
    static navigationOptions = {
        title: "MaxieeRNLab"
    }

    createHeader(title) {
        return <Text h3 key={title}>{title}</Text>
    }

    createLink(title, link) {
        return <ListItem
            key={title}
            title={title}
            bottomDivider={true}
            leftIcon={<Icon name='ios-flask' size={24} color={'#999999'} />}
            onPress={() => {
                if (typeof link == 'string') {
                    this.props.navigation.navigate(link)
                } else if (link instanceof Function) {
                    link();
                }
            }}/>
    }

    render() {
        return <ScrollView style={{padding: 10}}>{[
            this.createHeader("React Native"),
            this.createLink("Yoga Layout Demo Simple", () => IntentLauncher.startActivity({
                className: 'com.maxieernlab.yoga.YogaActivity2'
            })),
            this.createLink("Yoga Layout Demo", () => IntentLauncher.startActivity({
                className: 'com.maxieernlab.yoga.YogaActivity1'
            })),
            this.createLink("Buttons", "DemoButton"),
            this.createLink("Simple View", "DemoSimpleView"),
            this.createLink("Image", "ReactNativeUIImage"),
            this.createHeader("Template Page"),
            this.createLink("Login Demo 1", "DemoLogin1"),
            this.createHeader("React Navigation"),
            this.createLink("Stack Demo", "StackDemo"),
            this.createLink("HeartBeat BottomNavigation 1", "HeartBeatBottomNavi"),
            this.createLink("Material Top Navigation", "NavigationHello"),
            this.createHeader("Redux"),
            this.createLink("Redux Todo Demo", "ReduxTodo"),
            this.createHeader("IM"),
            this.createLink("Gifted Chat Demo", "ChatDemo")
        ]}</ScrollView>
    }
}

export default createAppContainer(
    createStackNavigator({
        Home: HomePage,
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
        ChatDemo: ChatDemo
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
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import NavigationHello from './src/demo/NavigationDemo/NavigationHello';
import StackDemo from './src/demo/NavigationDemo/StackDemo'
import HeartBeatBottomNavi from './src/demo/NavigationDemo/Custom/BottomNavigation/HeartBeatBottomNavi';
import ReactNativeUIImage from './src/demo/ReactNativeUIDemo/demos/ReactNativeUIImage';
import ReduxTodo from './src/demo/ReduxDemo/demos/ReduxTodo'
import { View } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import IntentLauncher from 'react-native-intent-launcher';

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
        return <View style={{padding: 10}}>{[
            this.createHeader("React Native"),
            this.createLink("Yoga Layout Demo", () => IntentLauncher.startActivity({
                className: 'com.maxieernlab.yoga.YogaActivity1'
            })),
            this.createLink("Image", "ReactNativeUIImage"),
            this.createHeader("React Navigation"),
            this.createLink("Stack Demo", "StackDemo"),
            this.createLink("HeartBeat BottomNavigation 1", "HeartBeatBottomNavi"),
            this.createLink("Material Top Navigation", "NavigationHello"),
            this.createHeader("Redux"),
            this.createLink("Redux Todo Demo", "ReduxTodo")
        ]}</View>
    }
}

export default createAppContainer(
    createStackNavigator({
        Home: HomePage,
        NavigationHello: NavigationHello,
        StackDemo: StackDemo,
        HeartBeatBottomNavi: HeartBeatBottomNavi,
        ReactNativeUIImage: ReactNativeUIImage,
        // Redux Demo
        ReduxTodo: ReduxTodo,
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
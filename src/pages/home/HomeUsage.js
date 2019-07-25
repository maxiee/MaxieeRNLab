import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import IntentLauncher from 'react-native-intent-launcher';

export default class HomeUsage extends React.Component {
    static navigationOptions = {
        title: 'RN Usage'
    }

    createHeader(title) {
        return <Text h4 key={title}>{title}</Text>
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
        return (
            <ScrollView style={{ padding: 10 }}>{[
                this.createHeader("Yoga Demo"),
                this.createLink("Yoga Layout Demo Simple", () => IntentLauncher.startActivity({
                    className: 'com.maxieernlab.yoga.YogaActivity2'
                })),
                this.createLink("Yoga Layout Demo", () => IntentLauncher.startActivity({
                    className: 'com.maxieernlab.yoga.YogaActivity1'
                })),
                this.createLink("Buttons", "DemoButton"),
                this.createLink("CheckBoxes", "DemoCheckBoxes"),
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
                this.createLink("Gifted Chat Demo", "ChatDemo"),
                this.createHeader("Chart"),
                this.createLink("Line Chart Demo", "DemoLineChart")
        ]}</ScrollView>)
    }
}
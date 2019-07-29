import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import IntentLauncher from 'react-native-intent-launcher';
import GridView from '../../widgets/gridview/GridView';
import { createHeader } from '../../common/utils/HomeUtils';

export default class HomeUsage extends React.Component {
    static navigationOptions = {
        title: 'Basic'
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
        let infosYoga = [
            {
                title: "Simple Demo",
                subtitle: "layouting 3 views",
                onPress: () => IntentLauncher.startActivity({
                    className: 'com.maxieernlab.yoga.YogaActivity2'
                })
            }, {
                title: "Complex Demo",
                subtitle: "layouting 16 views",
                onPress: () => IntentLauncher.startActivity({
                    className: 'com.maxieernlab.yoga.YogaActivity1'
                })
            },
        ];

        let infosWidgets = [
            {
                title: "Buttons",
                subtitle: "",
                onPress: () => this.props.navigation.navigate("DemoButton")
            },
            {
                title: "CheckBoxes",
                subtitle: "",
                onPress: () => this.props.navigation.navigate("DemoCheckBoxes")
            },
            {
                title: "Simple View",
                subtitle: "",
                onPress: () => this.props.navigation.navigate("DemoSimpleView")
            },
            {
                title: "Image",
                subtitle: "",
                onPress: () => this.props.navigation.navigate("ReactNativeUIImage")
            }
        ];

        let infosTemplate = [
            {
                title: "Login Demo 1",
                subtitle: "",
                onPress: () => this.props.navigation.navigate("DemoLogin1")
            }
        ]

        return (
            <ScrollView>
                {createHeader("Yoga Demo")}
                <GridView
                    infos={infosYoga}
                    onGridSelected={(index) => infosYoga[index].onPress()} /> 
                {createHeader("RN Widgets")}
                <GridView
                    infos={infosWidgets}
                    onGridSelected={(index) => infosWidgets[index].onPress()} />
                {createHeader("Template Page")}
                <GridView
                    infos={infosTemplate}
                    onGridSelected={(index) => infosTemplate[index].onPress()} />
                {/* 
                // this.createHeader("React Navigation"),
                // this.createLink("Stack Demo", "StackDemo"),
                // this.createLink("HeartBeat BottomNavigation 1", "HeartBeatBottomNavi"),
                // this.createLink("Material Top Navigation", "NavigationHello"),
                // this.createHeader("Redux"),
                // this.createLink("Redux Todo Demo", "ReduxTodo"),
                // this.createHeader("IM"),
                // this.createLink("Gifted Chat Demo", "ChatDemo"),
                // this.createHeader("Chart"),
                // this.createLink("Line Chart Demo", "DemoLineChart") */}
        </ScrollView>)
    }
}
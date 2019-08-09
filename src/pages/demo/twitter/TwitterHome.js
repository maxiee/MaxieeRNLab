import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { FacebookTabBar } from './TwitterTab';
import TwitterPost from './TwitterPost';
import screen from '../../../common/screen';
import { createStackNavigator } from 'react-navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const styles = StyleSheet.create({
    navAndroid: {
        backgroundColor: '#3195d7',
        width: screen.width,
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 10,
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
})

export default class TwitterTab extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '主页',
            title: "主页"
        };
    }

    changeTab(tabName) {
        this.setState({
            selectedTab: tabName
        });
    }

    updateTitle(obj) {
        const {i} = obj;
        let title = "";
        switch(i) {
            case 0:
                title = "主页";
                break;
            case 1: 
                title = "通知";
                break;
            case 2: 
                title = "私信";
                break;
            case 3: 
                title = "我";
                break;
        }
        this.setState({
            title
        });
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={styles.navAndroid}>
                    <View style={styles.logoContainer}>
                        <Icon name='logo-twitter' color="#fff" size={27} />
                        <Text style={styles.title}>Twitter</Text>
                    </View>
                    <View style={styles.logoContainer}>
                        <Icon name="ios-search" color="#fff" size={25} />
                        <Icon name="ios-create-outline" color="#fff" size={25}/>
                    </View>
                </View>
                <ScrollableTabView
                    onChangeTab={(obj) => this.updateTitle(obj)}
                    tabBarPosition='bottom'
                    renderTabBar={() => <FacebookTabBar gotoPage={(i) => null}/>}>
                    <TwitterPost tabLabel="ios-home" />
                    <TwitterPost tabLabel="ios-notifications" />
                    <TwitterPost tabLabel="ios-mail" />
                    <TwitterPost tabLabel="ios-person" />
                </ScrollableTabView>
            </View>
        )
    }
}
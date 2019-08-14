import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { Animated, StyleSheet, View, Text, Easing } from 'react-native';
import { FacebookTabBar } from './TwitterTab';
import TwitterPost from './TwitterPost';
import screen from '../../../common/screen';
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

class Entrance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transformAnim: new Animated.Value(1),
            opacityAnim: new Animated.Value(1),
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.transformAnim,
            {
                toValue: 50,
                duration: 1200,
                delay: 2000,
                easing: Easing.elastic(2)
            }
        ).start();
        Animated.timing(
            this.state.opacityAnim,
            {
                toValue: 0,
                duration: 800,
                easing: Easing.elastic(1),
                delay: 2200
            }
        ).start();
        setTimeout(() => {
            this.props.hideThis();
        }, 3300);
    }

    render() {
        return (
            <Animated.View style={{
                position: "absolute",
                top:0, left:0,
                height: screen.height,
                width: screen.width,
                backgroundColor:"#1b95e0",
                alignItems:"center",
                justifyContent:"center",
                opacity: this.state.opacityAnim
            }}>
                <AnimatedIcon
                    size={60}
                    style={{
                        color:"#fff",
                        position:"relative",
                        top: -20,
                        textAlign: "center",
                        transform: [{ scale: this.state.transformAnim }]
                    }}
                    name="logo-twitter" />
            </Animated.View>
        )
    }
    
}

export default class TwitterTab extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '主页',
            title: "主页",
            show: true
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
        let entrance = this.state.show ? <Entrance hideThis={() => this.setState({show: false})} /> : <View></View>
        return (
            <View style={{flex: 1}}>
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
                {entrance}
            </View>
        )
    }
}
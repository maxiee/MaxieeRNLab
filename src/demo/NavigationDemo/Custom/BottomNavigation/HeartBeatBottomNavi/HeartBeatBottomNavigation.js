import React from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const HEIGHT_TABBAR = 48
const HEIGHT_CIRCLE = 56

/**
 * references:
 *     1. https://medium.com/@sxia/how-to-customize-tab-bar-in-react-navigation-a0dc6d4d7e61
 *     2. https://maxiee.github.io/post/ReactNavigationCustomTabBar.md/
 */
export default class HeartBeatBottomNavigation extends React.Component {
    constructor(props) {
        super(props)
    }
    
    renderIcon() {
        return <Icon name={'ios-home'} size={24} color={'red'} />
    }

    renderTabButton(route, index) {
        const {
            activeTintColor,
            inactiveTintColor,
            navigation,
            getLabelText,
            renderIcon
        } = this.props

        const currentIndex = navigation.state.index;
        const label = getLabelText({ route, focused: currentIndex === index, index: index });

        return (
            <View key={route.routeName}
                style={styles.tabButtonSizer}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.navigate(route.routeName)
                    }}>
                    <View style={styles.tabButtonContainer}>
                        {this.renderIcon()}
                        {/* <Text style={{
                            backgroundColor: 'transparent',
                        }}>{label}</Text> */}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }

    render() {
        const { navigation, style } = this.props;
        let tabBarButtons = navigation.state.routes.map(this.renderTabButton.bind(this));

        tabBarButtons.splice(2, 0, 
            <View key="circle-space" 
                style={{ 
                    width: HEIGHT_CIRCLE * 0.8,
                }} />)

        return (
            <View style={[styles.container, style]}>
                <View style={styles.tabbarContainer}>
                    {tabBarButtons}
                </View>
                <View style={styles.circleButton}>
                    <Icon name="ios-add" 
                        size={36} 
                        color="white"
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: HEIGHT_CIRCLE
    },
    tabbarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 0.5,
        height: HEIGHT_TABBAR,
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderTopColor: "#CCCCCC",
    },
    circleButton: {
        width: HEIGHT_CIRCLE,
        height: HEIGHT_CIRCLE,
        position: 'absolute',
        bottom: 4,
        borderRadius: HEIGHT_CIRCLE/2,
        backgroundColor: 'pink',
        borderWidth: 0.5,
        borderColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabButtonSizer: {
        height: HEIGHT_TABBAR,
        width: HEIGHT_TABBAR,
    },
    tabButtonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
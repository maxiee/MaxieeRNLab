import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    title:{
        color:"#fff",
        fontSize:20,
        paddingLeft: 10
    },
    tabs: {
        height: 45,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
        backgroundColor:"#111"
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
})

export class FacebookTabBar extends Component {
    constructor(props) {
        super(props);
        this.tabIcons = [];
        this.setAnimationValue = this.setAnimationValue.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.props.gotoPage(0), 0);
        this.listener = this.props.scrollValue.addListener(this.setAnimationValue);
    }

    setAnimationValue({value}) {
        this.tabIcons.forEach((icon, i) => {
            const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
            icon.setNativeProps({
              style: {
                color: this.iconColor(progress),
              },
            });
        });
    }

    iconColor(progress) {
        const red = 49 + (159 - 49) * progress;
        const green = 149 + (159 - 149) * progress;
        const blue = 215 + (159 - 215) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    }

    render() {
        return <View style={[styles.tabs, this.props.style]}>
            {this.props.tabs.map((tab, i) => {
                return <TouchableOpacity 
                    key={tab} 
                    onPress={() => setTimeout(() => this.props.gotoPage(i), 0)}
                    style={styles.tab}>
                        <Icon
                            name={tab}
                            size={30}
                            color={this.props.activeTab === i ? 'rgb(49,149,215)' : 'rgb(159,159,159)'}
                            ref={(icon) => { this.tabIcons[i] = icon; }} />
                    </TouchableOpacity>
            })}
        </View>
    }
}


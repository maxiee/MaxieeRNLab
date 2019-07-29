import React, { Component } from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Paragraph } from '../../../../widgets/text/Text';
import screen from '../../../../common/screen';
import NavigationItem from '../../../../widgets/navi/NavigationItem';

const styles = StyleSheet.create({
    searchBar: {
        width: screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
      }
});

export default class HomeScene extends Component {
    static navigationOptions = {
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image 
                    source={require('../img/home/search_icon.png')}
                    style={styles.searchIcon}/>
                <Paragraph>搜索</Paragraph>
            </TouchableOpacity>
        ),
        headerRight: (
            <NavigationItem
                icon={require('../img/mine/icon_navigation_item_message_white.png')} />
        ),
        headerLeft: (
            <NavigationItem
                title='北京'
                titleStyle={{ color: 'white' }}
            />
        ),
        headerStyle: { backgroundColor: '#21C0AE' }
    }

    render() {
        return (
            <Text>Hello!</Text>
        )
    }
}
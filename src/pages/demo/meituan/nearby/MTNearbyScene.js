import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native';
import screen from '../../../../common/screen';
import { Paragraph } from '../../../../widgets/text/Text';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { MTNearbyHeaderView } from './MTNearbyHeaderView';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f3f3'
    },
    searchBar: {
      width: screen.width * 0.65,
      height: 30,
      borderRadius: 19,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eeeeee',
      alignSelf: 'center',
      marginRight: 20,
    },
    searchIcon: {
      width: 20,
      height: 20,
      margin: 5,
    },
    tabBarText: {
      fontSize: 14,
      marginTop: 13,
    },
    tabBarUnderline: {
      backgroundColor: '#FE566D'
    },
  })

export default class MTNearbyScene extends Component {
    static navigationOptions = {
        headerRight: (
            <TouchableOpacity style={styles.searchBar}>
                <Image 
                    source={require('../img/home/search_icon.png')}
                    style={styles.searchIcon} />
                <Paragraph>找附近的吃喝玩乐</Paragraph>
            </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10
            }}>
                <Image style={{width: 13, height: 16}}
                    source={require('../img/public/icon_food_merchant_address.png')} />
                <Text style={{ fontSize: 15, color: '#333333', marginLeft: 4}}>福州 鼓楼</Text>
            </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: 'white' },
    }

    render() {
        let titles = ['享美食', '住酒店', '爱玩乐', '全部']
        let types = [
            ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
            ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠'],
            ['热门', 'KTV', '足疗按摩', '洗浴汗蒸', '电影院', '美发', '美甲'],
            []
        ]
        return (
            <ScrollableTabView style={styles.container}
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#FE566D'
                tabBarInactiveTextColor="#555555"
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderline}>
                    {titles.map((title, i) => (
                        <View tabLabel={titles[i]}
                        style={{
                            width: 500,
                            height: 500
                        }}
                            key={i}>
                                <MTNearbyHeaderView
                                    titles={types[i]}
                                    selectedIndex={i} />
                        </View>
                    ))}
            </ScrollableTabView>
        )
    }
}
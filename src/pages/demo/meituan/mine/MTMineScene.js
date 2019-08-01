import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, RefreshControl, Text, Image } from 'react-native';
import NavigationItem from '../../../../widgets/navi/NavigationItem';
import screen from '../../../../common/screen';
import DetailCell from './MTDetailCell';
import { Heading2, Paragraph } from '../../../../widgets/text/Text';

const styles = StyleSheet.create({
    icon: {
      width: 27,
      height: 27,
    },
    header: {
      backgroundColor: "#21C0AE",
      paddingBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
    },
    avatar: {
      width: 50,
      height: 50,
      marginRight: 10,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: '#51D3C6'
    }
  })

export class MTMineScene extends Component {
    static navigationOptions = {
        headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <NavigationItem
                    icon={require('../img/mine/icon_navigation_item_set_white.png')}/>
                <NavigationItem
                    icon={require('../img/mine/icon_navigation_item_message_white.png')} />
            </View>
        ),
        headerStyle: {
            backgroundColor: "#21C0AE",
            elevation: 0,
            borderBottomWidth: 0
        }
    }

    constructor(props) {
        super(props);
        
        this.state = {
            isRefreshing: false
        }
    }

    onHeaderRefresh() {
        this.setState({ isRefreshing: true});

        setTimeout(() => {
            this.setState({ isRefreshing: false})
        }, 2000);
    }

    renderCells() {
        let cells = []
        let dataList = this.getDataList();
        dataList.forEach((l, index) => {
            l.forEach(data => {
                cells.push(<DetailCell
                    image={data.image}
                    title={data.title}
                    subtitle={data.subtitle}
                    key={data.title} />)
            })
            cells.push(<View key={index} style={{height: 14}}></View>)
        })
        return cells;
    }

    renderHeader() {
        return (
            <View style={ styles.header }>
                <Image style={styles.avatar} source={require('../img/mine/avatar.png')} />
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Heading2 style={{ color: 'white'}}>Maxiee</Heading2>
                        <Image style={{marginLeft: 4}} source={require('../img/mine/beauty_technician_v15.png')} />
                    </View>
                    <Paragraph style={{ color: 'white', marginTop: 4 }}>个人信息 ></Paragraph>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
                <View style={{
                    position: 'absolute',
                    width: screen.width,
                    height: screen.height / 2,
                    backgroundColor: "#21C0AE" 
                }}/>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray' />
                    }>
                        {this.renderHeader()}
                        <View style={{ height: 14 }} />
                        {this.renderCells()}

                </ScrollView>
            </View>
        )
    }

    getDataList() {
        return (
          [
            [
              { title: '我的钱包', subtitle: '办信用卡', image: require('../img/mine/icon_mine_wallet.png') },
              { title: '余额', subtitle: '￥95872385', image: require('../img/mine/icon_mine_balance.png') },
              { title: '抵用券', subtitle: '63', image: require('../img/mine/icon_mine_voucher.png') },
              { title: '会员卡', subtitle: '2', image: require('../img/mine/icon_mine_membercard.png') }
            ],
            [
              { title: '好友去哪', image: require('../img/mine/icon_mine_friends.png') },
              { title: '我的评价', image: require('../img/mine/icon_mine_comment.png') },
              { title: '我的收藏', image: require('../img/mine/icon_mine_collection.png') },
              { title: '会员中心', subtitle: 'v15', image: require('../img/mine/icon_mine_membercenter.png') },
              { title: '积分商城', subtitle: '好礼已上线', image: require('../img/mine/icon_mine_member.png') }
            ],
            [
              { title: '客服中心', image: require('../img/mine/icon_mine_customerService.png') },
              { title: '关于美团', subtitle: '我要合作', image: require('../img/mine/icon_mine_aboutmeituan.png') }
            ]
          ]
        )
      }
}
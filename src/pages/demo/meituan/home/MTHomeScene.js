import React, { Component } from 'react'
import { TouchableOpacity, Image, Text, StyleSheet, View, FlatList, StatusBar, Linking } from 'react-native';
import { Paragraph, Heading3 } from '../../../../widgets/text/Text';
import screen from '../../../../common/screen';
import NavigationItem from '../../../../widgets/navi/NavigationItem';
import MTAPI from '../common/MTAPI';
import { GroupPurchaseCell } from '../widget/GroupPrchaseCell';
import MTHomeMenuView from './MTHomeMenuView';
import GridView from '../../../../widgets/gridview/GridView';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3'
    },
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

    constructor(props) {
        super(props);
        
        this.state = {
            discounts: [],
            dataList: [],
            refreshing: false,
        }
    }

    componentDidMount() {
        this.requestData();
    }

    requestData = () => {
        this.setState({ refreshing: true });

        this.requestRecommand();
        this.requestDiscout();
    }

    requestRecommand = async () => {
        try {
            let response = await fetch(MTAPI.recommend);
            let json = await response.json();

            let dataList = json.data.map(info => {
                return {
                    id: info.id,
                    imageUrl: info.squareimgurl,
                    title: info.mname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            })

            this.setState({
                dataList: dataList,
                refreshing: false
            })
        } catch (error) {
            this.setState({ refreshing: false })
        }
    }

    requestDiscout = async () => {
        try {
            let json = MTAPI.discount;
            this.setState({ discounts: json.data })
        } catch (error) {
            alert(error)
        }
    }

    renderCell = (info) => {
        return (
            <GroupPurchaseCell
                info={info.item}
                onPress={this.onCellSelected} />
        )
    }

    onCellSelected = (info) => {
        StatusBar.setBarStyle('default', false);

    }

    keyExtractor = (item, index) => {
        return item.id.toString();
    }

    renderHeader = () => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => Linking.openURL("https://github.com/huanxsd/MeiTuan")}>
                    <Text style={{
                        margin: 10,
                        padding: 10,
                        backgroundColor: 'pink',
                        color: 'white'
                    }}>本高仿美团项目代码来源自 huanxsd/MeiTuan</Text>
                </TouchableOpacity>
                <MTHomeMenuView menuInfos={MTAPI.menuInfo} />
                <View style={{height: 14}} />
                <GridView infos={this.state.discounts} />
                <View style={{height: 14}} />
                <View style={styles.recommendHeader}>
                    <Heading3>猜你喜欢</Heading3>
                </View>
            </View>
        )
    }
    

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataList}
                    renderItem={this.renderCell}
                    keyExtractor={this.keyExtractor}
                    ListHeaderComponent={this.renderHeader}
                    />
            </View>
        )
    }
}
import React, { Component } from 'react'
import MTHomeMenuItem from './MTHomeMenuItem';
import { StyleSheet, View, ScrollView } from 'react-native';
import screen from '../../../../common/screen';
import PageControl from 'react-native-page-control'

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    menuContainer: {
      flexDirection: 'row',
    },
    itemsView: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: screen.width,
    },
    pageControl: {
      margin: 10,
    }
  })

export default class MTHomeMenuView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentPage: 0
        }
    }

    onScroll(e) {
        let x = e.nativeEvent.contentOffset.x;
        let currentPage = Math.round(x / screen.width)

        if (this.state.currentPage != currentPage) {
            this.setState({
                currentPage: currentPage
            })
        }
    }

    render() {
        let { menuInfos, onMenuSelected } = this.props;

        let menuItems = menuInfos.map((info, i) => (
            <MTHomeMenuItem
                key={info.title}
                title={info.title}
                icon={info.icon}
                onPress={() => {
                    onMenuSelected && onMenuSelected(i)
                }} />
        ))

        let menuViews = []
        let pageCount = Math.ceil(menuInfos.length / 10)

        for (let i = 0; i < pageCount; i++) {
            let items = menuItems.slice(i * 10, i * 10 + 10)

            let menuView = (
                <View style={styles.itemsView} key={i}>
                    {items}
                </View>
            )
            menuViews.push(menuView);
        }

        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={e => this.onScroll(e)}>
                        <View style={styles.menuContainer}>
                            {menuViews}
                        </View>
                </ScrollView>
                <PageControl
                    style={styles.pageControl}
                    numberOfPages={pageCount}
                    currentPage={this.state.currentPage}
                    hidesForSinglePage
                    pageIndicatorTintColor="gray"
                    currentPageIndicatorTintColor="#21C0AE"
                    indicatorSize={{ width: 8, height: 8 }} />

            </View>
        )
    }
    
} 
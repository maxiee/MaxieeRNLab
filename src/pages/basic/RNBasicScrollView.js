import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Heading2 } from '../../widgets/text/Text';
import PageControl from 'react-native-page-control';
import screen from '../../common/screen';

const styles = StyleSheet.create({
    scrollView: {
        height: 100,
        borderWidth: 1,
        borderColor: 'red'
    },
    heading: {
        margin: 10
    }
});

export default class RNBasicScrollView extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentPage: 0
        }    
    }
    
    onScroll(e) {
        let x = e.nativeEvent.contentOffset.x;
        let currentPage = Math.round(x / screen.width);

        if (this.state.currentPage != currentPage) {
            this.setState({
                currentPage: currentPage
            })
        }
    }

    render() {
        let items = []

        for (let i = 0; i < 10; i++) {
            items.push(<Text style={{
                width: 50,
                height: 50,
                backgroundColor: 'yellow',
                margin: 10
            }}
            key={i}
            >{i}</Text>)
        }
    
        return (
            <View>
                <Heading2 style={styles.heading}>Basic ScrollView</Heading2>
                <ScrollView style={styles.scrollView}>
                    {items}
                </ScrollView>
                <Heading2 style={styles.heading}>Horizontal ScrollView</Heading2>
                <ScrollView style={styles.scrollView} horizontal>
                    {items}
                </ScrollView>
                <Heading2 style={styles.heading}>PagingEnabled ScrollView</Heading2>
                <ScrollView style={styles.scrollView} horizontal pagingEnabled
                    onScroll={e => this.onScroll(e)}>
                    {items}
                    {items}
                </ScrollView>
                <PageControl
                    numberOfPages={3}
                    currentPage={this.state.currentPage}
                    hidesForSinglePage
                    pageIndicatorTintColor='red'
                    currentPageIndicatorTintColor='yellow'
                    indicatorSize={{ width: 8, height: 8}} />
            </View>
        )
    }
}
import React from 'react'
import { View } from 'react-native';
import { Heading2 } from '../../widgets/text/Text';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import screen from '../../common/screen';

const SimpleTab = () => <ScrollableTabView>
    <View key={1} style={{width: screen.width, height: 100, backgroundColor: 'red'}} tabLabel="Tab1" />
    <View key={2} style={{width: screen.width, height: 100, backgroundColor: 'yellow'}} tabLabel="Tab2" />
    <View key={3} style={{width: screen.width, height: 100, backgroundColor: 'green'}} tabLabel="Tab3" />
</ScrollableTabView>

export default (props) => {
    return (
        <View style={{flex: 1}}>
            <Heading2 style={{margin: 10}}>Simple</Heading2>
            <SimpleTab />
        </View>
    )
}
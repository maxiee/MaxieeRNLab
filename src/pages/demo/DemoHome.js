import React, {PureComponent} from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class DemoHome extends PureComponent {
    static navigationOptions = {
        title: 'Template'
    }

    render() {
        return (
            <ScrollView>
                <Button onPress={() => this.props.navigation.push('MeituanHome')} title="Meituan（美团）"></Button>
                <View style={{height: 14}} />
                <Button onPress={() => this.props.navigation.push('StopWatch')} title="Stop Watch"></Button>
                <View style={{height: 14}} />
                <Button onPress={() => this.props.navigation.push('Weather')} title="Weather" />
                <View style={{height: 14}} />
                <Button onPress={() => this.props.navigation.push('Twitter')} title="Twitter" />
            </ScrollView>
        )
    }
}
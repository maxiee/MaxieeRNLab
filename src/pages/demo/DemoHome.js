import React, {PureComponent} from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

export default class DemoHome extends PureComponent {
    static navigationOptions = {
        title: 'Template'
    }

    render() {
        return (
            <ScrollView>
                <Button onPress={() => this.props.navigation.push('MeituanHome')} title="Meituan（美团）"></Button>
            </ScrollView>
        )
    }
}
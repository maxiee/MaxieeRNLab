import React from 'react';
import { View, Text, Button } from 'react-native';

class HeaderComp extends React.Component {
    render() {
        console.log(this.props)
        return (
            <View style={{
                backgroundColor: 'red'
            }}>
                <Text>{this.props.title} with CustomHeader</Text>
            </View>
        )
    }
}

export default class CustomHeader extends React.Component {
    static navigationOptions = {
        headerTitle: <HeaderComp title="CustomHeaderPage" />,
        title: 'CustomHeaderPage' // 无效
    }

    constructor(props) {
        super(props);
        
    }

    render() {
        return <View><Text>CustomHeader</Text></View>
    }
}
import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation'
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

let CompA = () => <View><Text>A</Text></View>
let CompB = () => <View><Text>B</Text></View>
let CompC = () => <View><Text>C</Text></View>
let CompD = () => <View><Text>D</Text></View>

class CompE extends React.Component {
    static navigationOptions = {
        title: "CompE"
    }

    render() {
        return <View><Text>E</Text></View>
    }
}

let Index = (props) => {
    let { navigation } = props


    return <View>{
        ["CompA", "CompB", "CompC", "CompD", "CompE"].map((v, index) => 
            <Button mode="outlined"
                    key={index}
                    onPress={() => navigation.navigate(v)}>
                {v}
            </Button>)
    }</View>
}

export default createStackNavigator({
    Index: Index,
    CompA: CompA,
    CompB: CompB,
    CompC: CompC,
    CompD: CompD,
    CompE: CompE
}, {
    headerMode: "none"
})
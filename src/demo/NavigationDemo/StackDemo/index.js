import React from 'react';
import { createStackNavigator } from 'react-navigation'
import { View, Text, Button } from 'react-native';

class CompA extends React.Component {
    static navigationOptions = { title: "CompA" }

    render() { return <View><Text>CompA</Text></View> }
}

class CompB extends React.Component {
    static navigationOptions = { title: "CompB" }

    render() { return <View><Text>CompB</Text></View> }
}

let Index = (props) => {
    return <View>{
        ["CompA", "CompB"].map((v, index) => 
            <Button mode="outlined" key={index} 
                title={v}
                onPress={() => props.navigation.navigate(v)} />)
    }</View>
}

const Stack = createStackNavigator({
    Index: Index,
    CompA: CompA,
    CompB: CompB,
})

Stack.navigationOptions = {
    header: null
};

export default Stack;
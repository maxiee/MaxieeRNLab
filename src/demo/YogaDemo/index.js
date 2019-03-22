import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher';

export default class ReduxDemo extends React.Component {
    static navigationOptions = {
        title: "YogaDemo"
    }

    render() {
        return <View>
            <Button mode="outlined"
                onPress={() => IntentLauncher.startActivity({
                    className: 'com.maxieernlab.yoga.YogaActivity1'
                })}>
                Nested Yoga Nodes
            </Button>
        </View>
    }
}
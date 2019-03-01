import React from "react";
import { View } from 'react-native'
import Markdown from "react-native-markdown-renderer";
import { createMaterialTopTabNavigator } from 'react-navigation'
import DocHelloNavigation from "../doc/DocHelloNavigation";

let DocComp = () => <View style={{margin: 10}}>
    <Markdown>{DocHelloNavigation}</Markdown>
</View>

let CodeComp = () => <View style={{margin: 10}}></View>

export default createMaterialTopTabNavigator({
    Show: CodeComp,
    Doc: DocComp
})
    
    
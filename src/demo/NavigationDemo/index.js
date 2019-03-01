import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import StoryBook from "../../template/StoryBook";
import content from './content.json'

export default class NavigationDemo extends React.Component {
    static navigationOptions = {
        title: "React Navigation Demo"
    }
    
    render() {
        return StoryBook(content, this.props.navigation)
    }
}
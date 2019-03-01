import React from "react";
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
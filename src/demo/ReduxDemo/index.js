import React from "react";
import content from './content.json'
import StoryBook from "../../template/StoryBook/index.js";

export default class ReduxDemo extends React.Component {
    static navigationOptions = {
        title: "ReduxDemo"
    }

    render() {
        return StoryBook(content, this.props.navigation)
    }
}
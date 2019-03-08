import React from "react";
import content from './content.json'
import StoryBook from "../../template/StoryBook/index.js";

export default class ReactNativeUiDemo extends React.Component {
    static navigationOptions = {
        title: "ReactNativeUiDemo"
    }

    render() {
        return StoryBook(content, this.props.navigation)
    }
}
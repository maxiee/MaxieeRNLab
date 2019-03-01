import React from "react";
import content from './content.json'
import StoryBook from "../../template/StoryBook/index.js";

export default class HomePage extends React.Component {
    static navigationOptions = {
        title: "MaxieeRNLab"
    }

    render() {
        return StoryBook(content, this.props.navigation)
    }
}
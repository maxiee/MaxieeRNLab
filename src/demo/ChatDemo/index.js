import React from 'react';
import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';

let messages = [
    {
        _id: 2,
        text: "World!",
        createdAt: new Date(Date.UTC(2019, 3, 1, 1, 0, 0)),
        user: {
            _id: 2,
            name: "Judy"
        },
        sent: true,
        received: true
    },
    {
        _id: 1,
        text: "hello",
        createdAt: new Date(Date.UTC(2019, 3, 1, 0, 0, 0)),
        user: {
            _id: 1,
            name: "MaxieeBot"
        },
        sent: true,
        received: true
    }
]

export default class ChatDemo extends React.Component {

    state = {
        messages: messages,
    }

    constructor(props) {
        super(props)

        this.onSend = this.onSend.bind(this)
    } 

    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages)
            }
        })
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend} />
        )
    }
}
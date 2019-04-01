import React from 'react';
import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';
import { View, Text } from 'react-native';
import GradientButton from '../ReactNativeUIDemo/buttons/GradientButton'

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
        createdAt: new Date(Date.UTC(2019, 3, 1, 2, 0, 0)),
        user: {
            _id: 1,
            name: "MaxieeBot"
        },
        sent: true,
        received: true
    }, {
        _id: 3,
        text: 'I am system message',
        createdAt: new Date(Date.UTC(2019,32, 1, 3, 0, 0)),
        system: true,
    }
]

export default class ChatDemo extends React.Component {

    state = {
        messages: messages,
    }

    constructor(props) {
        super(props)

        this.onSend = this.onSend.bind(this)
        this.renderCustomActions = this.renderCustomActions.bind(this)
        this.renderBubble = this.renderBubble.bind(this)
        this.renderCustomView = this.renderCustomView.bind(this)
    } 

    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages)
            }
        })
    }

    renderCustomActions(props) {
        const options = {
        'Action 1': (props) => {
            alert('option 1');
        },
        'Action 2': (props) => {
            props.onSend({
                buttonText: "OMG!"
            })
        },
        'Cancel': () => {},
        };
        return (
            <Actions
                {...props}
                options={options}
            />
        )
    }

    renderBubble(props) {
        return (
            <Bubble
                { ...props }
                wrapperStyle={{
                    left: {
                        backgroundColor: "#FF7A45"
                    }
                }} />
        )
    }

    renderCustomView(props) {
        if (props.currentMessage.buttonText) {
            return <GradientButton
                onPress={() => alert("aHa!")}
                text={props.currentMessage.buttonText} />                
        }
        return null
    }

    render() {
        return (
            <GiftedChat
                renderUsernameOnMessage={true}
                messages={this.state.messages}
                renderBubble={this.renderBubble}
                renderActions={this.renderCustomActions}
                renderCustomView={this.renderCustomView}
                onSend={this.onSend} />
        )
    }
}
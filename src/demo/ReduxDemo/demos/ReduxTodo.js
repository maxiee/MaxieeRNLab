import React from 'react';
import { View, Text } from 'react-native';
import todoAdd from '../../../reducers/todo/actions/todo-add'
import todoFinish from '../../../reducers/todo/actions/todo-finish'
import todoUnfinish from '../../../reducers/todo/actions/todo-unfinish'
import { connect } from 'react-redux'
import { Button, List, Dialog, Portal, TextInput } from 'react-native-paper';

class Component extends React.Component {
    state = {
        dialogVisible: false,
        dialogInputTodoName: "",
    }

    _showDialog = () => this.setState({ dialogVisible: true })

    _hideDialog = () => this.setState({ dialogVisible: false })

    render() {
        const {todo, todoAdd, todoFinish, todoUnfinish}  = this.props;

        console.log(todo)
        return <Portal.Host>
            <View>
                <Button
                    style={{width: '50%'}}
                    mode="outlined"
                    onPress={() => this._showDialog()}>add</Button>
                <Portal>
                    <Dialog
                        visible={this.state.dialogVisible}
                        onDismiss={this._hideDialog}>
                        <Dialog.Title>Add Todo</Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                label='todo name'
                                value={this.state.dialogInputTodoName}
                                mode="outlined"
                                onChangeText={text => this.setState({
                                    dialogInputTodoName: text
                                })} />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={this._hideDialog}>Cancel</Button>
                            <Button onPress={() => {
                                if (!this.state.dialogInputTodoName) {
                                    this._hideDialog()
                                }

                                todoAdd({
                                    id: + new Date(),
                                    title: this.state.dialogInputTodoName,
                                    finished: false
                                })

                                this.setState({
                                    dialogInputTodoName: "",
                                    dialogVisible: false
                                })
                            }}>Ok</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <View>{
                        todo.todos.map((v,index) => (
                            <List.Item
                                key={v.id}
                                title={v.title}
                                description={"id = " + v.id}
                                left={props => <Text {...props}>{
                                    v.finished ? "DONE" : "TODO"
                                }</Text>}
                                right={props => <Button
                                    onPress={() => {
                                    v.finished ? todoUnfinish(v.id) : todoFinish(v.id)
                                }}>{
                                    v.finished ? "❎" : "✅"
                                }</Button>} />
                        ))
                }</View>
            </View>
        </Portal.Host>
    }
}

const mapStateToProps = ({todo}) => ({todo})
const actions = {todoAdd, todoFinish, todoUnfinish}

export default connect(mapStateToProps, actions)(Component)
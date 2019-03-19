import React from 'react';
import { View, Text } from 'react-native';
import todoAdd from '../../../reducers/todo/actions/todo-add'
import todoFinish from '../../../reducers/todo/actions/todo-finish'
import todoUnfinish from '../../../reducers/todo/actions/todo-unfinish'
import { connect } from 'react-redux'
import { Button, List } from 'react-native-paper';

let Component = ({todo, todoAdd, todoFinish, todoUnfinish}) => {
    console.log(todo)
    return <View>
        <Button
            style={{width: '50%'}}
            mode="outlined"
            onPress={() => todoAdd({
                id: + new Date(),
                title: "abc",
                finished: false
            })}>add</Button>
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
}

const mapStateToProps = ({todo}) => ({todo})
const actions = {todoAdd, todoFinish, todoUnfinish}

export default connect(mapStateToProps, actions)(Component)
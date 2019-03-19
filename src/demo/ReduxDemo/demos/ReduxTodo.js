import React from 'react';
import { View, Text, Button } from 'react-native';
import todoAdd from '../../../reducers/todo/actions/todo-add'
import { connect } from 'react-redux'

let Component = ({todo, todoAdd}) => {
    console.log(todo)
    return <View>
        <Button
            title="add" 
            onPress={() => todoAdd({title: "abc"})} />
        <View>{
                todo.todos.map((v,index) => <Text key={index}>{v.title}</Text>)
        }</View>
    </View>
}

const mapStateToProps = ({todo}) => ({todo})
const actions = {todoAdd}

export default connect(mapStateToProps, actions)(Component)
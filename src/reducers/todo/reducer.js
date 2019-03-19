import { ACTION_TODO_ADD, ACTION_TODO_FINISH, ACTION_TODO_UNFINISH } from "../../config/actions";

const initialState = {
    todos: []
}

let toggleTodoFromTodos = (todos, id, status) => todos.map(v => {
    if (v.id !== id) {
        return v;
    }
    return {
        ...v,
        finished: status
    }
})

const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_TODO_ADD:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case ACTION_TODO_FINISH:
            return {
                ...state,
                todos: toggleTodoFromTodos(state.todos, payload, true)
            }
        case ACTION_TODO_UNFINISH:
            return {
                ...state,
                todos: toggleTodoFromTodos(state.todos, payload, false)
            }
        default:
            return state
    }
}

export default todoReducer
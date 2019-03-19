import { ACTION_TODO_ADD } from "../../config/actions";

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_TODO_ADD:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        default:
            return state
    }
}

export default todoReducer
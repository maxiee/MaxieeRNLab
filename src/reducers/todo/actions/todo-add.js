import { ACTION_TODO_ADD } from "../../../config/actions";

export default function todoAdd(item) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTION_TODO_ADD,
            payload: item
        })
    }
}
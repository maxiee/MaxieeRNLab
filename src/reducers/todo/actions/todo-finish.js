import { ACTION_TODO_FINISH } from "../../../config/actions";

export default function todoFinish(id) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTION_TODO_FINISH,
            payload: id
        })
    }
}
import { ACTION_TODO_UNFINISH } from "../../../config/actions";

export default function todoUnfinish(id) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTION_TODO_UNFINISH,
            payload: id
        })
    }
}
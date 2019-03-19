import { combineReducers, createStore, applyMiddleware } from "redux";
import todo from '../reducers/todo/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    todo
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
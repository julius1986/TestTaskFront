import {combineReducers, createStore} from "redux";
import usersReducer from './reducers/users/reducer'

const cReducer = combineReducers({usersReducer});
const store = createStore(cReducer);
export default store;
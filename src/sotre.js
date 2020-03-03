import {combineReducers, createStore} from "redux";
import usersReducer from './reducers/Users/reducer'
import userFormReducer from "./reducers/UserForm/reducer"

const cReducer = combineReducers({ usersReducer, userFormReducer });
const store = createStore(
  cReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
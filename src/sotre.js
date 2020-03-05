import { combineReducers, createStore, applyMiddleware } from "redux";
import usersReducer from './reducers/Users/reducer';
import thunk from "redux-thunk";

const cReducer = combineReducers({ usersReducer});
const store = createStore(
  cReducer,
  applyMiddleware(thunk));
export default store;
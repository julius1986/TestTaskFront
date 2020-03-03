import { ADD_USER } from "./actions";

export default function Users(state = {users:[]}, action) {
  switch (action.type) {
    case ADD_USER:
      let users = [...state.users, action.value];
      return { ...state, users };
    default:
      return state;
  }
}

import {DELETE_USER_BY_ID} from "./actions"

const testUsers = [
  { id: 1, name: "Grisha" },
  { id: 2, name: "Lena" }
];

function Users(state = {users:testUsers}, action) {
  switch (action.type) {
    case DELETE_USER_BY_ID:
        let listOfUsers = state.filter(el => el.id !== action.value);
        return { ...state, users: listOfUsers };
    default:
        return state;
  }
}

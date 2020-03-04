import {SET_FIELD} from "./actions"

const fields = {firstName:"", lastName:"", email:"", eventDate:""}

export default function setField(state = { ...fields }, action) {
  switch (action.type) {
    case SET_FIELD:    
      return { ...state, ...action.value };
    default:
      return state;
  }
}

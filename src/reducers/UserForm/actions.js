export const SET_FIELD = "SET_FIELD";

export function setField(fieldValue){
    return {type:SET_FIELD, value:fieldValue};
}
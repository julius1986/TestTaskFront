export const DELETE_USER_BY_ID = "DELETE_USER_BY_ID";

export function deleteUserById(id){
    return {type:DELETE_USER_BY_ID, value:id}
}
export const ADD_USER = "ADD_USER";

export function deleteUserById(user){
    return { type: ADD_USER, value: user };
}
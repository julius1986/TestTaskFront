export const ADD_USER = "ADD_USER";

export function addUser(user){
    return { type: ADD_USER, value: user };
}

export function fetchAddUser(url, user){
    return (dispatch) => {
        console.log(user);
        
        fetch(url, {method: 'POST', body:JSON.stringify(user), headers: {'Content-Type': 'application/json'}})
        .then((result)=>{
            console.log(result);
            
            return result.json();
        })
        .then((result)=>{
        console.log(result);

            dispatch(addUser(user))
        })
        
    };
    
}
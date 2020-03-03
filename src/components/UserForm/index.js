import React from 'react'

export default class UserForm extends React.Component{
    addUser = (e) =>{
        console.log("this");
        e.preventDefault();
    }
    render(){
    return (<form>
        First name: <input name="firstName" type="text" placeholder="insert name"/><br/>
        <button className="btn btn-success" onClick={this.addUser}>Send data</button>
        </form>)
    }
}
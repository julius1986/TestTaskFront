import React from 'react'

export default class UserForm extends React.Component{
    addUser = (e) =>{
        console.log("this");
        e.preventDefault();
    }
    render(){
    return (<form>
        This is test header<input type="text" placeholder="insert name"/>
        <button className="btn btn-success" onClick={this.addUser}>Send data</button>
        </form>)
    }
}
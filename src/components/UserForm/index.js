import React from 'react'
import {connect} from "react-redux"
import {setField} from "../../reducers/UserForm/actions"
import {addUser} from "../../reducers/Users/actions"

class UserForm extends React.Component{
    
    addUser = (e) =>{
        e.preventDefault();
        this.props.addUser(this.props.fields);
    }
    
    handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.props.setField({[name]: value})
    }

    render(){
    return (<form>
        First name: <input onChange={this.handleInputChange} name="firstName" type="text" placeholder="insert first name"/><br/>
        Last name: <input onChange={this.handleInputChange} name="lastName" type="text" placeholder="insert last name"/><br/>
        Email: <input onChange={this.handleInputChange} name="email" type="text" placeholder="insert Email"/><br/>
        Date: <input onChange={this.handleInputChange} name="date" type="text" placeholder="insert date"/><br/>
        <button className="btn btn-success" onClick={this.addUser}>Send data</button>
        </form>)
    }
}

const mapState = state => {
    return {fields:state.userFormReducer}
}
const mapActions = dispatch => {
  return ({
      setField: fieldValue => dispatch(setField(fieldValue)),
      addUser: user => dispatch(addUser(user))
  });
};
export default connect(mapState, mapActions)(UserForm);
import React from 'react'
import {connect} from "react-redux"
import {setField} from "../../reducers/UserForm/actions"
import {fetchAddUser} from "../../reducers/Users/actions"
import "moment/locale/it.js";
import { DatePickerInput } from "rc-datepicker";

class UserForm extends React.Component{
    
    addUser = (e) =>{
        e.preventDefault();
        this.props.addUser("http://localhost:6123/users", this.props.fields);
    }
    
    handleInputChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;    
        this.props.setField({[name]: value})
    }
    //Date: <input onChange={this.handleInputChange} name="eventDate" type="text" placeholder="insert date"/><br/>
    render(){
    return (<form>
        First name: <input onChange={this.handleInputChange} name="firstName" type="text" placeholder="insert first name"/><br/>
        Last name: <input onChange={this.handleInputChange} name="lastName" type="text" placeholder="insert last name"/><br/>
        Email: <input onChange={this.handleInputChange} name="email" type="text" placeholder="insert Email"/><br/>
        <button className="btn btn-success" onClick={this.addUser}>Send data</button>
        <DatePickerInput name="eventDate" value={this.props.eventDate} onChange={(jsDate)=>this.props.setField({eventDate: jsDate})} />
        </form>)
    }
}

const mapState = state => {
    return {fields:state.userFormReducer}
}
const mapActions = dispatch => {
  return ({
      setField: fieldValue => dispatch(setField(fieldValue)),
      addUser: (url, user) => dispatch(fetchAddUser(url, user))
  });
};
export default connect(mapState, mapActions)(UserForm);
import React from 'react'
import {connect} from "react-redux"
import {fetchAddUser} from "../../reducers/Users/actions"
import "moment/locale/it.js";
import { DatePickerInput } from "rc-datepicker";
import InputField from "../InputField"
import Label from "../Label"
import Message from "../Message"
import {checkMail} from "../../utils/checkMail"
import {SERVER_URL} from "../../config"

class UserForm extends React.Component{
    state = { user:{firstName:"", lastName:"", email:"", eventDate:""}, resultMessage:null}    
    addUser = async (e) =>{
        e.preventDefault();
        let res = await this.props.addUser(SERVER_URL+"/users", this.state.user)
        
        res?
            this.setState({...this.state, resultMessage:"User was added"}):
            this.setState({ ...this.state, resultMessage: "Cant add user" });
        
        setTimeout(()=>{
            this.setState({...this.state, resultMessage:null})
        },2000)

        console.log(res);
        
    }
    
    handleInputChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;    
        this.setState({user:{...this.state.user, [name]: value}})
    }
    //Date: <input onChange={this.handleInputChange} name="eventDate" type="text" placeholder="insert date"/><br/>
    render(){
    return (
      <form>
        <div className="form-group row">
          <Label text="First name" />
          <InputField
            onChange={this.handleInputChange}
            name="firstName"
            type="text"
            placeholder="insert first name"
          />
          <Message
            className="text-danger col-sm-5"
            isShow={this.state.user.firstName}
            text="Wrong first name"
          />
        </div>
        <div className="form-group row">
          <Label text="Last name: " />
          <InputField
            onChange={this.handleInputChange}
            name="lastName"
            type="text"
            placeholder="insert last name"
          />
          <Message
            className="text-danger col-sm-5"
            isShow={this.state.user.lastName}
            text="Wrong last name"
          />
        </div>
        <div className="form-group row">
          <Label text="Email: " />
          <InputField
            onChange={this.handleInputChange}
            name="email"
            type="text"
            placeholder="insert Email"
          />
          <Message
            className="text-danger col-sm-5"
            isShow={checkMail(this.state.user.email)}
            text="Wrong email"
          />
        </div>
        <div className="form-group row">
          <Label text="Date:" />
          <DatePickerInput
            name="eventDate"
            value={this.state.user.eventDate}
            onChange={jsDate =>
              this.setState({ user: { ...this.state.user, eventDate: jsDate } })
            }
          />
          <Message
            className="text-danger col-sm-5"
            isShow={this.state.user.eventDate}
            text="Wrong date"
          />
        </div>
        <div className="form-group row">
          <button className="btn btn-primary mb-2" onClick={this.addUser}>
            Send data
          </button>
          <Message
            className="text-info col-sm-5"
            isShow={!this.state.resultMessage}
            text={this.state.resultMessage}
          />
        </div>
      </form>
    );
    }
}

const mapState = state => {
    return {fields:state.userFormReducer}
}
const mapActions = dispatch => {
  return ({
      addUser: (url, user) => dispatch(fetchAddUser(url, user))
  });
};
export default connect(mapState, mapActions)(UserForm);
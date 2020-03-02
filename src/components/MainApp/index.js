import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react'
import './index.css';
import UserForm from "../UserForm"
import EventButton from "../EventButton"

class App extends Component {
  state = {formIsShow:false}
  toggleForm = () => {
    this.setState(state=>({      
      formIsShow:!state.formIsShow
    }))
  }
  render() {
    let form = this.state.formIsShow?(<UserForm/>):(<EventButton toggle={this.toggleForm}/>)
    return (
      <div className="App container">
        {form}
      </div>
    );
  }
}
export default App;

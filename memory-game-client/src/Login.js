import React from 'react';
import { Route, Redirect } from 'react-router'
import './App.css';
// import Profile from './Profile'
// import HomePage from './HomePage'
let toHome;

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      nameValue: '',
      passwordValue:'',
      redirect: false
    };
  }
  handleChangeName = (event) => {
    this.setState({
      nameValue: event.target.value,
    });
  }
  handleChangePassword = (event) => {
    this.setState({
      passwordValue: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.nameValue === 'User1'&& this.state.passwordValue === 'Password'){
    this.setState({
      redirect: true
    })}
    else{
      alert("Wrong Username or Password!")
    }


  }
  render() {
    return (
    <div>
      {this.state.redirect? <Redirect to="/homepage"/>:(
      <div className="ui form">
        <form onSubmit={this.handleSubmit} className="form-box">
          <div className="field" >
          <label className="user">Enter User Name:</label>

            <input type="text" value={this.state.nameValue} onChange={this.handleChangeName} />

          </div>

          <div className="field" >
          <label className="user">Enter Password:</label>

            <input type="password" value={this.state.passwordValue} onChange={this.handleChangePassword} />

          </div>
          
          <input className="ui submit button" type="submit" value="Login" />
        </form>
    </div>
  )}
  </div>
    );
  }
}
export default Login

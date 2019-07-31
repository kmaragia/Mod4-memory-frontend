import React from 'react';
import { Route, Redirect } from 'react-router'
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
      alert("Wrong Username or Password")
    }


  }
  render() {
    return (
    <div>
      {this.state.redirect? <Redirect to="/homepage"/>:(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter User Name:
            <input type="text" value={this.state.nameValue} onChange={this.handleChangeName} />
          </label>
          <br/>
          <label>
            Enter Password:
            <input type="password" value={this.state.passwordValue} onChange={this.handleChangePassword} />
          </label>
          <br/>
          <input type="submit" value="Login" />
        </form>
    </div>
  )}
  </div>
    );
  }
}
export default Login

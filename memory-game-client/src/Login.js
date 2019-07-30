import React from 'react';
// import Profile from './Profile'
// import HomePage from './HomePage'
let toHome;

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      nameValue: '',
      passwordValue:''
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


  }
  render() {
    return (
    <div>
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter User Name:
            <input type="text" value={this.state.nameValue} onChange={this.handleChangeName} />
          </label>
          <br/>
          <label>
            Enter Password:
            <input type="text" value={this.state.passwordValue} onChange={this.handleChangePassword} />
          </label>
          <br/>
          <input type="submit" value="Login" />
        </form>
    </div>
  </div>
    );
  }
}
export default Login

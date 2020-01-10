import React from "react";
import $ from "jquery";
import NavBar from '../nav.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
    this.saveValue = this.saveValue.bind(this)
    this.sendInfo = this.sendInfo.bind(this);
  }
  saveValue(e) {
    document.querySelector('.error').style.display = "none";
    this.setState({ [e.target.name]: e.target.value })
  }
  sendInfo(e) {
    $.post('/auth/login', this.state)
      .then(result => {
        if (!result.found) {
          document.querySelector('.error').innerText = result.msg;
          document.querySelector('.error').style.display = "block";
        } else {
          localStorage.setItem('token', result.token);
          window.location.pathname = "/";
        }
      })
    e.preventDefault();

  }
  render() {
    return (
      <div>
        <NavBar />
        <h1>Login</h1>
        <label>Email</label>
        <input type="text" name="email" value={this.state.email} onChange={this.saveValue} />
        <br />
        <label>Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.saveValue} />
        <br />
        <input type="submit" onClick={this.sendInfo} value="Login" />
        <br />
        <a href="/signup">Sign Up</a>
        <h1 className="error" style={{ display: "none" }}></h1>
      </div>
    );
  }
}

export default Login;

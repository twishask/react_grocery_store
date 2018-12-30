import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Signup from './Signup.js';

class Login extends Component {
  
  constructor (props) {
  super(props);
  this.state = {
    email: '',
    password: '',
    signup: false
    }
  };
  
  signup = (e) =>{
    e.preventDefault()
    this.setState({signup: true});
  };
  
  render() {
    return (
      <div className="App">
       <form className="demoForm">
       <h2>Login</h2>
       <div className="form-group">
         <label htmlFor="email">Email address</label>
         <input type="email" className="form-control" name="email" value={this.state.email} />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input type="password" className="form-control" name="password" value={this.state.password} />
       </div>
       <button type="submit">Login</button>
       <button onClick={this.signup}>New User? Create an account</button>
     </form>
     { this.state.signup ? <Signup /> : null }
     </div>
    );
  }
}

export default Login;


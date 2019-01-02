import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Login.css';
import Signup from './Signup.js';

class Login extends Component {
  
  constructor (props) {
  super(props);
  this.state = {
    email: '',
    password: '',
    signup: false
    }
  }
  
  render() {
    return (
      <div className="App">
       <form className="demoForm">
       <div className="form-group">
         <label htmlFor="email">Email address</label>
         <input type="email" className="form-control" name="email" />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input type="password" className="form-control" name="password" />
       </div>
       <br></br>
       <button type="submit">Login</button>
      </form>
     </div>
    );
  }
}

export default Login;


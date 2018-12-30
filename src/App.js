import React, { Component } from 'react';
import fruits_veges from './fruits_veges4.jpeg';
import './App.css';
import ReactDom from 'react-dom';
import Login from './Login.js';
import Signup from './Signup.js';
import Popup from 'react-popup';

class App extends Component {
  
  constructor (props) {
  super(props);
  this.state = {
    login: false
    }
  };
  
  login = (e) => {
    e.preventDefault();
    this.setState({login:true})
  };
  
  render() {
    return (
      <div className="App">
        <head className="App-header" >
          OVF &nbsp; &nbsp; &nbsp;
          <input type="text" placeholder="Search" size="90"/>
          &nbsp;
          <input type="text" placeholder="Location" size="30"/>
          &nbsp; &nbsp;
          <button onClick={this.login}>Login/Register</button>
        </head>
        <body>
          { this.state.login ? <Login /> : null }
          <p></p>
          <img src={fruits_veges} />
        </body>
      </div>
    );
  }
}

export default App;

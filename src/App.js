import React, { Component } from 'react';
import fruits_veges from './fruits_veges4.jpeg';
import tomato from './Tomato.png';
import './App.css';
import ReactDom from 'react-dom';
import Login from './Login.js';
import Signup from './Signup.js';
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';
import Products from './Products.js';

class App extends Component {
  
  constructor (props) {
    super(props);
    
    this.updatePopupbox = this.updatePopupbox.bind(this);
    this.openPopupbox = this.openPopupbox.bind(this);
    this.state = {
      login: false
      };
  };

  updatePopupbox() {
      const content = (
        <div>
          <Signup />
          <button className="App-button" onClick={PopupboxManager.close}>Close</button>
        </div>  
      );

      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: 'Sign Up'
          }
        }
      })
    };

  openPopupbox() {
        const content = (
          <div>
            <Login />
            <br></br>
            <button className="App-button" onClick={this.updatePopupbox}>New User? Create an account</button>
          </div>
        )
        PopupboxManager.open({
        content,
        config: {
          titleBar: {
            enable: true,
            text: 'Login'
          },
          fadeIn: true,
          fadeInSpeed: 500
        }
      })
    };
   
  
  render() {
    return (
      <div className="App">
        <header className="App-header" >
          OVF &nbsp; &nbsp; &nbsp;
          <input type="text" placeholder="Search" size="70"/>
          &nbsp;
          <input type="text" placeholder="Location" size="30"/>
          &nbsp; &nbsp;
          <button className="App-button" onClick={this.openPopupbox}>Login/Register</button>
          <PopupboxContainer />
          </header>
        <body>
          <p></p>
          <img src={fruits_veges} />
          <br></br>&nbsp; Vegetables<br></br>
          <div class="flex-container">
          {Products.map(item => {
          return <div>
          <img src={tomato} />
          {item["name"]}
          <br></br>
          {item["Price"]}
          <br></br>
          <button>{item["Button"]}</button>
          </div>;
        })}
        </div>
        </body>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './App.css';
import fruits_veges from './Images/fruits_veges4.jpeg';
import Login from './Login.js';
import Signup from './Signup.js';
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import Products from './Products.js';
import Cart from './Cart.js';

class App extends Component {
  
  constructor (props) {
    super(props);
    
    this.updatePopupbox = this.updatePopupbox.bind(this);
    this.openPopupbox = this.openPopupbox.bind(this);
    this.state = {
      login: false,
      showCart: false,
      items: [],
      searchText: '',
    };
  };
  
  addItem = (e,item) => {
    e.preventDefault()
    const newItem = item
    const items = [...this.state.items, newItem]
    this.setState({
      items: items,
    })
  }  

  deleteItem = name => {
    var count=0
    var filteredItems = []
    this.state.items.map(item => {
      if (item.name!==name || count == 1){
        filteredItems.push(item)
      }
      else
        count = 1
    })
    this.setState({
      items: filteredItems,
    })
  }
  
  displayCart() {
    this.setState({showCart: !this.state.showCart})
  }
  
  handleSearch = e => {
    Products.map(item => {
        if (item.name == e.target.value)
          console.log(item.name)
    })
    this.setState ({
      searchText : e.target.value,
    })
  }

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
          <input type="text" placeholder="Search" size="70" value={this.state.searchText} onChange={this.handleSearch}/>
          &nbsp; &nbsp;
          <input type="button" value="My Cart" onClick={this.displayCart.bind(this)}/>
          &nbsp; &nbsp;
          <input type="button" className="App-button" onClick={this.openPopupbox} value ="Login/Register" />
          <PopupboxContainer />
        </header>
        
          <p></p>
          <img src={fruits_veges} className="image"/>
          <div>
          {this.state.showCart && < Cart items={this.state.items} deleteItem={this.deleteItem} />}
          </div>
          <br></br>
          <div className="flex-container">
          {Products.map(item => {
          return <div>
          <img src={item["image"]} />
          <br></br>
          {item["name"]}
          <br></br>
          Rs.{item["Price"]}
          <br></br>
          <button onClick={(e) => {this.addItem(e, item)}}>{item["Button"]}</button>
          </div>;
        })}
        </div>
      </div>
    );
  }
}

export default App;

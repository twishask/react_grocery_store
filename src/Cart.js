import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './App.css';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      };
  }
  render(){
    const itemslist = this.props.items.map(item => {
      return(
      <li>{item.name} Rs.{item.Price}
      <button onClick={() => this.props.deleteItem(item.name)} >Remove</button>
      </li>
      )})
    this.state.total = 0;
    for (var i=0; i<this.props.items.length; i++) {
      this.state.total += this.props.items[i].Price;
    }
    
    return(
      <div className="Cart-div">
      <h4>Cart</h4>
      <hr></hr>
      <ul className="theList"> {itemslist.length ? itemslist : <p>Nothing added to the cart</p>}</ul>
      <b>Total: Rs.{this.state.total}</b>
      </div>
    )
  }
}

export default Cart;

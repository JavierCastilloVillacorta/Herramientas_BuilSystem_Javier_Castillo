import React, { Component } from 'react';
import imgLogout from '../img/logout.png';
import imgCart from '../img/cart.png';
import { Link } from 'react-router-dom';
import ShoppingService from '../service/ShoppingService.js';


class Header extends Component {
  service = ShoppingService.getInstance();

  constructor(){
    super();
    this.service.header = this;
  }

  logout = () =>{
    localStorage.removeItem("email");
  }



  render(){
    return(
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">La Bodega</a>
        <form className="form-inline">
          <Link to={{ pathname: '/carrito', state: { products: this.service.shoppingItemms } }}>
          <div className="nav-link">
            <img src={imgCart} height="20" />
            <span  className="badge badge-danger">{ this.service.shoppingItemms.length }</span>
          </div>
          </Link>
          <Link to="/" >
           <img src={imgLogout} height="20"  onClick={this.logout} />
          </Link>
        </form>
      </nav>
    )
  }
}

export default Header;

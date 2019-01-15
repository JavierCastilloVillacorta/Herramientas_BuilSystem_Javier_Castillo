import React, { Component } from 'react';
import imgLogout from '../img/logout.png';
import imgCart from '../img/cart.png'

class Header extends Component {
  render(){
    return(
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">La Bodega</a>
        <form className="form-inline">
          <a className="nav-link">
            <img src={imgCart} height="20" />
            <span  className="badge badge-danger">0</span>
          </a>
          <a className="nav-link">
           <img src={imgLogout} height="20" />
          </a>
        </form>
      </nav>
    )
  }
}

export default Header;

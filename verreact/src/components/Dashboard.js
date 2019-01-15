import React, { Component } from 'react';
import './Dashboard.css';
import Header from './Header.js';
import ProductCatalog from './ProductCatalog.js';
import { Redirect } from 'react-router'

class Dashboard extends Component {


  constructor(){
    super();
    this.state ={
      isLoggedIn:true
    };
    if(localStorage.getItem("email") == null){
      this.state.isLoggedIn = false
    }
  }


  render(){

    if(this.state.isLoggedIn === false){
            return (<Redirect to="/" />);
    }

    return(
      <div className="background">
        <div className="container">
            <Header />
            <br/>
          <div className="jumbotron bg-light">
            <ProductCatalog />
          </div>
        </div>
      </div>


    )
  }
}

export default Dashboard

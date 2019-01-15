import React, { Component } from 'react';
import './Dashboard.css';
import Header from './Header.js';
import ProductCatalog from './ProductCatalog.js';
import { Route, Redirect } from 'react-router-dom'



class Dashboard extends Component {

  constructor(){
    super();

    if(localStorage.getItem("email") == null){

      <Redirect to="/login"/>

    // validar regreso a login si no est logueado
    }



  }





  render(){

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

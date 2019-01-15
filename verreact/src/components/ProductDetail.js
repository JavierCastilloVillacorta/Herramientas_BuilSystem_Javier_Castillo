import React, { Component } from 'react';
import Header from './Header.js';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';


class ProductDetail extends Component {

  constructor(props){
    super(props)
    this.state ={
      isLoggedIn:true
    };
    if(localStorage.getItem("email") == null){
      this.state.isLoggedIn = false
    }
  }

  retornar = () =>{

  }

  render(){

    if(this.state.isLoggedIn === false){
        return (<Redirect to="/" />);
    }

    const product = this.props.location.state.product
    var img = require('../img/'+product.imagen);


    return(
      <div className="background">
        <div className="container">
          <Header />
          <div className="jumbotron bg-light mt-4">
            <div className="container">
              <h4> {product.nombre} </h4>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                    <div className="row">
                      <div className="col-12 border">
                        <img src={img} alt="iagen" width="100%" />
                      </div>
                      <Link to="dashboard" >
                        <button type="button" className="btn btn-light border margent" onClick={this.retornar} >Atras</button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <h5><strong>Precio : {product.precio} </strong></h5>
                    <h6><strong>Unidades Disponibles: {product.cantidad} </strong></h6>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail;

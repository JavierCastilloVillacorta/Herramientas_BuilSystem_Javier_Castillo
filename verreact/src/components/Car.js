import React, { Component } from 'react';
import Header from './Header.js';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import ShoppingService from '../service/ShoppingService.js';

class Car extends Component {

  constructor(){
    super()
    this.state = {
      isLoggedIn: true,
      service: ShoppingService.getInstance()

    };
    if(localStorage.getItem("email") == null){
      this.state.isLoggedIn = false
    }
  }

  pay = () =>{
    this.state.service.payShoppingCart();

  }


  render(){

    if(this.state.isLoggedIn == false){
      return (<Redirect to="/" />);
    }



    var productsItem = [];
    var total = 0;
    var subtotal = 0;

    this.props.location.state.products.map((products, i) => {

      var img = require('../img/'+products.product.imagen);
      subtotal = products.quantity* products.product.precio;
      productsItem.push(

        <li key={products.product.id } className="list-group-item" >
          <div className="container">
            <div className="row">
              <div className="col6 col-sm-4">
                <img src={img} alt="img" width="100%" />
                <p>SubTotal: {subtotal} </p>
              </div>
              <div className="col6 col-sm-8">
                <p> { products.product.nombre } </p>
                <p>Unidades: { products.quantity }</p>

              </div>
            </div>
          </div>
        </li>
      );
      total = total +subtotal;

    })

    return(
      <div className="background">
        <div className="container">
          <Header />
          <div className="jumbotron bg-light mt-4">
            <div className="container">
              <h4>Carrito de Compras</h4>
              <hr />
              <div className="container">
                <div className="row">

                  <div className="col-12 col-sm-6">
                    <div className="row">
                      <div className="col-12">
                        <ul className="list-group">
                           { productsItem }
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6">
                    <h5><strong>Total: $ {total}</strong></h5>

                    <Link to="/dashboard" >
                    <button type="button" className="btn btn-light border" >Cancelar</button>
                    </Link>
                    <Link to="/dashboard" >
                    <button type="button"  className="btn btn-light border" onClick={this.pay} >Pagar</button>
                    </Link>
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

export default Car;

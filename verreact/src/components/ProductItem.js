import React, { Component } from 'react';
import './ProductItem.css';
import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetail.js'


class ProductItem extends Component {

  constructor(props){
    super(props)

    this.state = {
      title : "",
    }
  }



  render(){
    var img = require('../img/'+this.props.productsItem.imagen);

    return(
      <div  className="col-12 col-md-6 col-lg-3 mb-3">
      <div className="border">
        <div className="container">
          <img src={img} alt="imagen" height="150px" width="100%" />
        </div>
        <br/>
        <div className="container">
          <h5>{ this.props.productsItem.nombre }</h5>
          <h6>Precio: { this.props.productsItem.precio } </h6>
          <h6><strong>Unidades disponibles: { this.props.productsItem.cantidad } </strong></h6>
          <div className="row">
            <div className="col-5">
            <Link to={{ pathname: '/detalle', state: { product: this.props.productsItem} }}>
              <button type="button" className="btn btn-primary letra-btn" >Ver mas</button>
            </Link>
            </div>
            <div className="col-7">
              <div className="row">
                <div className="col-5">
                  <button type="button" className="btn btn-warning letra-btn" >Añadir</button>
                </div>
                <div className="col-7">
                  <input type="number" className="text-left letra-btn inp-width" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </div>
      </div>
    )
  }
}

export default ProductItem;

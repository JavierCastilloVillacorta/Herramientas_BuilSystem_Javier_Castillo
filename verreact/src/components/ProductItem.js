import React, { Component } from 'react';
import './ProductItem.css';
import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetail.js';
import ShoppingService from '../service/ShoppingService.js';

class ProductItem extends Component {

  constructor(props){
    super(props)


    var service = ShoppingService.getInstance();
    const found = service.shoppingItemms.find(sci => sci.product.id == this.props.productsItem.id);
    var cantProduct = 0;
    if (found != null) {
      cantProduct = found.quantity;
    }

    this.state = {
      cantProduct : cantProduct,
      ShoppingService: service
    }
  }

  cantidad = (e) =>{
    const cantProduct = parseInt(e.target.value);
    this.setState({
      cantProduct
    })
  }

  addToCart = () =>{

    if (this.state.cantProduct <=  this.props.productsItem.cantidad) {
      this.state.ShoppingService.addProduct(this.props.productsItem, this.state.cantProduct)
    }else{
      alert("Supera el Stock")
      this.setState({
          cantProduct: 0
      });

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
                  <button type="button" className="btn btn-warning letra-btn" onClick={ this.addToCart } >Añadir</button>
                </div>
                <div className="col-7">
                  <input type="number" className="text-left letra-btn inp-width" onChange={ this.cantidad } value={ this.state.cantProduct } />
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

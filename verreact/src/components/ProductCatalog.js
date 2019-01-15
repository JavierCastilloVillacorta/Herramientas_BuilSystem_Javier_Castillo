import React, { Component } from 'react';
import ProductItem from './ProductItem';
import Product from '../modelo/productIterfase.js';

import db from '../firebase.js';

const dbProductos = db.collection('productos');

class ProductCatalog extends Component {

constructor(){
  super();
  this.state = {
    dataSourceReady: false,
    products: [],
    productsToDisplay: []
  }
}

componentDidMount() {

  this.getProduct();
}

getProduct = () =>{
  dbProductos.onSnapshot(snapshot =>{
    var products = [];
    snapshot.forEach(elementos =>{
      const product = new Product();
      product.id = elementos.id;
      product.nombre = elementos.data().nombre;
      product.imagen = elementos.data().imagen;
      product.cantidad = elementos.data().cantidad;
      product.precio = elementos.data().precio;
      products.push(product);
    })

    this.setState({
      dataSourceReady: true,
      productsToDisplay: products,
      products
    });

  })
}

handleChange = (e) =>{
  const search = e.target.value
  if (search.length > 0) {
    const productsToDisplay = this.state.products.filter(
      product => product.nombre.toLowerCase().indexOf(search.toLowerCase()) >= 0
    )

    this.setState({
      productsToDisplay
    });
  }else{
    this. setState({
      productsToDisplay : this.state.products
    })
  }


}


  render(){
    var productsItem;
    if (this.state.dataSourceReady){
      productsItem = [];
      this.state.productsToDisplay.map((products, i) => {
        productsItem.push( <ProductItem key={products.id}  productsItem={products}  /> );
      })
    }else{
      productsItem = <h1>Cargando...</h1>
    }




    return(

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-9">
            <h3>Catálogo de Productos</h3>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3  text-left">
            <p>¿Qué estás buscando?</p>
            <input
              type="text"
              name="buscador"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <hr />
        <div className="row">
          { productsItem }
        </div>
      </div>

    )
  }
}

export default ProductCatalog;

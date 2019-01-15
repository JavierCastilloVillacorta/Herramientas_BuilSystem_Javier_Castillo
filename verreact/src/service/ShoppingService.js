import React  from 'react';
import ReactDOM from 'react-dom';
import CarIterfase from '../modelo/carIterfase.js';

import db from '../firebase.js';
const dbProductos = db.collection('productos');


 export default class ShoppingService{

  static instance = null;
  shoppingItemms = [];
  header;

  static getInstance(){
    if(this.instance == null){
      this.instance = new ShoppingService();
    }
    return this.instance;
  }

  addProduct(product, cantidad){
    const found = this.shoppingItemms.find(sci => sci.product.id == product.id )
    if(found != null){
      if(cantidad == 0){
          const index = this.shoppingItemms.indexOf(found, 0);
          this.shoppingItemms.splice(index,1);
      }else{
        found.quantity = cantidad
      }

    }else if( cantidad > 0){
      const shoppingItemm = new CarIterfase(product, cantidad);
      this.shoppingItemms.push(shoppingItemm);
    }
    this.header.forceUpdate();
  }



  payShoppingCart(){
    if (this.shoppingItemms.length > 0) {
      const item = this.shoppingItemms[0]
      this.playProduct(item);
    }
  }

  playProduct(item){

    this.shoppingItemms.map(id =>{

      id.product.cantidad -= id.quantity;
      dbProductos.doc(id.product.id).set({
        nombre: id.product.nombre,
        imagen: id.product.imagen,
        cantidad: id.product.cantidad,
        precio: id.product.precio
      });

    })

    this.shoppingItemms = [];
    this.header.forceUpdate();

  }

}

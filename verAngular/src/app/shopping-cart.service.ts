import { Injectable } from '@angular/core';
import { ProductIterfase } from './model/productIterfase';
import { CarIterfase } from './model/carIterfase';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Injectable()

export class ShoppingCartService {
  shoppingCartItems: CarIterfase[] = [];

  constructor(
    private router: Router,
    private productService:ProductService,
  ) {}

  addProduct(product : ProductIterfase, quantity: number){
    let found = this.shoppingCartItems.find(sci => sci.product.id === product.id);

    if(found != null){
      if(quantity == 0){
        let index = this.shoppingCartItems.indexOf(found,0);
        this.shoppingCartItems.splice(index, 1);
      }else {
        found.quantity = quantity;
      }

    }else if(quantity > 0){
      let shoppingCartItems: CarIterfase = new CarIterfase();
      shoppingCartItems.product = product;
      shoppingCartItems.quantity = quantity;
      this.shoppingCartItems.push(shoppingCartItems);
    }
  }

  resetShoppingCart() {
    this.shoppingCartItems = [];
  }

  pagoCarrito(){
    if(this.shoppingCartItems.length > 0){
      let item = this.shoppingCartItems[0];
      this.pagoProducto(item);
    }
  }

  pagoProducto(item: CarIterfase ){
    var pago = false;
    var itmpagados ="";
    var totalItem = this.shoppingCartItems.length;
    var contador = 1;
    for(let i of this.shoppingCartItems ){
      let cantidadProucto = parseInt(i.product.cantidad);
      cantidadProucto -= i.quantity;
      i.product.cantidad = cantidadProucto.toString();
      this.productService.pagoProducto(i.product,i.quantity).then(res=>{
        if(res[0] == "Correcto"){
          pago = true;
          itmpagados = itmpagados + res[1]
          if(contador == totalItem){
            if(pago){
              this.resetCarrito();
              alert(itmpagados);
              this.router.navigate(['/dashboard']);
            }else{
              alert("Ocurrió un error al Pagar el carrito");
            }
          }
          contador ++;
        }
      })

    }

  }
  resetCarrito() {
    this.shoppingCartItems = [];
  }

  total(): number{
    var total = 0;
    for(let item of this.shoppingCartItems) {
      total += item.subtotal();
    }
    return total;
  }


}

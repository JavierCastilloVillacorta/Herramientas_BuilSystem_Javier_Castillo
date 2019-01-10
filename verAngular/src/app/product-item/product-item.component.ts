import { Component, OnInit,Input } from '@angular/core';
import { ProductIterfase } from '../model/productIterfase';
import { ShoppingCartService } from '../shopping-cart.service'


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: ProductIterfase;
  cantidadItem: number;

  constructor( private shoppingCartService:ShoppingCartService ) {
    this.cantidadItem = 0;
  }

  ngOnInit() {
    let found = this.shoppingCartService.shoppingCartItems.find(sci => sci.product.id === this.product.id);
    console.log(found);
    if (found != null) {
      this.cantidadItem = found.quantity;
    }
  }

  addToCart(){
    var cantidad  = parseInt(this.product.cantidad);
    if(this.cantidadItem <= cantidad ){
      this.shoppingCartService.addProduct(this.product, this.cantidadItem);
    }else{
      alert("No puedes agregar: " + this.cantidadItem + ", el inventario es de " + this.product.cantidad);
      this.cantidadItem = 0;
    }


  }


}

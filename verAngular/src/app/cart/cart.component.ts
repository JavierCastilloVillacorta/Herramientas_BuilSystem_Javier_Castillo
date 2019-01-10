import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    if(localStorage.getItem("email") == null){
      this.router.navigate(['/login']);
    }
  }

  pago(){
    this.shoppingCartService.pagoCarrito();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private shoppingCartService : ShoppingCartService
  ) { }

  ngOnInit() {
  }

  logout(){
      localStorage.removeItem("email");
      this.router.navigate(['/login']);
  }

  showCart(){
    if(this.shoppingCartService.shoppingCartItems.length > 0){
      this.router.navigate(['/carrito']);
    }else{
      alert("Carrito Vacío");
    }

  }

}

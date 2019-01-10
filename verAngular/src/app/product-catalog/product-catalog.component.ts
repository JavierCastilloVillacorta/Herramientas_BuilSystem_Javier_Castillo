import { Component, OnInit } from '@angular/core';
import { ProductIterfase } from '../model/productIterfase';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {
  products: ProductIterfase[];
  productsToDisplay: ProductIterfase[] = this.products;
  searchText: "";
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.todosProductos(this.searchText);
  }


  search(){
    this.todosProductos(this.searchText)
  }

  todosProductos(texto){
    if(texto == undefined){
      texto = "";
    }

    this.productService.productos(texto).subscribe(product =>{
    product = product.filter(Boolean);
    this.productsToDisplay = product;

    })
  }


}

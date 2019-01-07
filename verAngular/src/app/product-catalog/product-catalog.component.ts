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
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducto().subscribe(product =>{
      this.products = product;
    })
  }



}

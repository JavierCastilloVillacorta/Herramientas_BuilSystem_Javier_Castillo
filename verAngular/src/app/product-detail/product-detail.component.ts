import { Component, OnInit } from '@angular/core';
import { ProductIterfase } from '../model/productIterfase';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: ProductIterfase[];


  constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
      private location: Location,
  ) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    this.productosItem(id);
  }

  productosItem(id){
    this.productService.productosItemId(id).subscribe(product =>{
      product = product.filter(Boolean);
      console.log(product)
      this.product = product[0];
    })
  }

  goBack() {
    this.location.back();
  }

}

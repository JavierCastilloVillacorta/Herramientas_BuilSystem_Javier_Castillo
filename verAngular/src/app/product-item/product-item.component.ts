import { Component, OnInit,Input } from '@angular/core';
import { ProductIterfase } from '../model/productIterfase';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: ProductIterfase;


  constructor() { }

  ngOnInit() {
    console.log(this.product);

  }


}

import { ProductIterfase } from './productIterfase';

export class CarIterfase {
  product: ProductIterfase;
  quantity: number;

  subtotal(): number {
    var precio  = parseInt(this.product.precio);
    return precio * this.quantity;
  }

  constructor(){}

}

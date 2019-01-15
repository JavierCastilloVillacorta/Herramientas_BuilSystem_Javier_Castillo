export default class  CarIterfase{
  product;
  quantity;
  subtotal() {
      return this.product.precio * this.quantity;
  }
  constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
   }
}

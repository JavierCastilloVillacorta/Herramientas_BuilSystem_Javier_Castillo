export default class  ProductIterfase{
  product;
  quantity;
  subtotal() {
      return this.product.price * this.quantity;
  }
  constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
   }
}

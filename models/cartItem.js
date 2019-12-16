export default class CartItem {
  constructor(id, title, quantity, price, sum) {
    this.id = id;
    this.quantity = quantity;
    this.price = price;
    this.title = title;
    this.sum = sum;
  }
}

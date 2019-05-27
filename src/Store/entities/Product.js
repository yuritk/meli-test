import Author from "./Author";
import Price from "./Price";

export default class Product {
  constructor(data) {
    const { author, item } = data;

    const {
      id,
      title,
      price,
      picture,
      condition,
      free_shipping,
      sold_quantity,
      description
    } = item;

    this.id = id;
    this.author = new Author(author);
    this.price = new Price(price);
    this.title = title;
    this.description = description;
    this.picture = picture;
    this.condition = condition;
    this.soldQuantity = sold_quantity;
    this.freeShipping = free_shipping;
  }
}

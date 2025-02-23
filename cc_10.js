// Task 1: Creating a product Class

class Product {
    constructor(name, id, price, stock) {
      this.name = name;  //Product name
      this.id =  id;     //Product ID
      this.price = price;   //Product Price
      this.stock = stock;   //Product Stock
    }
getDetails() {
    return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
};   //Display Product Details

updateStock(quantity){     //Decrease stock amount based on quantity ordered
    this.stock -= quantity;
};   
restock(quantity) {        //Increase Sotkc by restock Quantity
    this.stock += quantity;
}
};

const prod1 = new Product("Laptop", 101, 1200, 10);  //Declare new product
console.log(prod1.getDetails());
prod1.updateStock(3);             //Decrease amount of stock by 3
console.log(prod1.getDetails()); 

// Task 2: Creating an Order Class

class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = product.price * quantity;
        this.product.updateStock(quantity);
    }
    getOrderDetails() {
        return `Order ID: $${this.orderId}, Product: $${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`
    };
}

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());
console.log(prod1.getDetails()); 
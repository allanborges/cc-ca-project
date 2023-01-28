import Product from "./Product";

export default class Order {
    
    private quantity:number;
    
    constructor(product: Product, quantity:number) {
        this.quantity = quantity;
    }    
}
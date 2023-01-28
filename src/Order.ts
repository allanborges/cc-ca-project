import Product from "./Product";
import Coupon from "./Coupon";

export default class Order {
       
    private products: any[] = []; 
    private coupons: Coupon[] = [];   
    
    public addProduct(product: Product, qt: number) {
        this.products.push({qt,product});
    }
    
    public giveDiscount(coupon: Coupon) {
        this.coupons.push(coupon);
    }
}
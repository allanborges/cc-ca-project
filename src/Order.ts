import Product from "./Product";
import Coupon from "./Coupon";
import Client from "./Client";
import {validate} from "./CpfValidator";

export default class Order {
       
    private products: {product: Product; qt: number; }[] = []; 
    private client: {name: string; cpf: string;} = {name: "", cpf: ""};
    private coupons: Coupon[] = [];   
    
    public addProduct(product: Product, qt: number) {
        this.products.push({qt,product});
    }
    
    public giveDiscount(coupon: Coupon) {
        this.coupons.push(coupon);
    }

    public getProducts() {
        return this.products;
    }

    public calculateTotal(): number {
        let totalOrder = 0;
        return this.products.reduce((acumulator, productOrder) => acumulator + (productOrder.product.price * productOrder.qt), totalOrder);        
    }

    private calculateDiscount(totalOrder: number) {
        let discount = 0;
        if (this.coupons.length) {
            discount= this.coupons.reduce((acumulator, coupon) => acumulator + coupon.discount, discount);
            discount = totalOrder * (discount/100);
        }
        return discount;
    }

    public closeOrder(client: Client) {
        let isValidCpf = validate(client.cpf);      
        if (!isValidCpf) {
            throw new Error("CPF inválido");
        }
        let totalOrder = this.calculateTotal();
        totalOrder -= this.calculateDiscount(totalOrder)
        return totalOrder;
    }
}
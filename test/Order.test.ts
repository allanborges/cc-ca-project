import Order from "../src/Order";
import Product from "../src/Product";
import Coupon from "../src/Coupon";

test("deve ter 3 produtos e calcular valor total", function() {
    const order = new Order();
    const product1 = new Product(10, "Kinder Ovo");
    const product2 = new Product(3, "Protex Sabonete");
    const product3 = new Product(2, "Coquinha Zero");
    order.addProduct(product1, 1);
    order.addProduct(product2, 1);
    order.addProduct(product3, 1);
    expect(order.getProducts().length).toBe(3);
    expect(order.calculateTotal()).toBe(15);
});

test("deve ter 3 produtos e calcular valor total com desconto", function() {
    const order = new Order();
    const discountExpected =  20/100;        
    const product1 = new Product(10, "Kinder Ovo");
    const product2 = new Product(3, "Protex Sabonete");
    const product3 = new Product(2, "Coquinha Zero");  
    const coupon1 = new Coupon("Cupom Maroto", 10);
    const coupon2 = new Coupon("Cupom Bonus", 10);
    order.addProduct(product1, 1);
    order.addProduct(product2, 1);
    order.addProduct(product3, 1);
    order.giveDiscount(coupon1);
    order.giveDiscount(coupon2);
    expect(order.getProducts().length).toBe(3);
    expect(order.closeOrder({name:"João Nunes", cpf:"53329398094"})).toBe(15 - (15 * discountExpected));
});

test("deve ser um cpf inválido", function() {
    const order = new Order();    
    expect(() => order.closeOrder({name:"João Nunes", cpf:"1212412423"})).toThrow("CPF inválido");
});


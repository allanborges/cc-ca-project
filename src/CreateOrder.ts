import Product from "./Product";
import Order from "./Order";
import * as readline from 'readline';
 

(function() {

    let product, qt, client;

    let products = [
        new Product(10.50, "Chocolate"),
        new Product(50, "Vodka"),
        new Product(4.30, "Biscoito"),
        new Product(25, "Caixa de Coca")   
    ];

    var requestClientName = () => {
        readline.question('Digite seu nome: ', arg => {
            client['name'] = arg;
            requestClientCpf();
        });     
    }

    var requestClientCpf = () => {
        readline.question('Digite seu cpf: ', arg => {
            client['cpf'] = arg;
            requestProduct();
        });     
    }
    
    var requestProduct = () => {
        readline.question('Digite o nome do Produto: ', arg => {
            product = arg;
            product = products.
                find(pr => pr.description.toLocaleLowerCase() === arg.toLocaleLowerCase());
            requestQt(product);
        });
    }
    
    var requestQt = (product) => {
        readline.question('Digite a quantidade do Produto: ', arg => {
            qt = arg;
            console.log(`${product.description} com qtde ${qt}`);
            console.log("Criando Pedido...");
            const order = new Order();
            order.addProduct(product, qt);
            readline.close();
        });
    };

}());
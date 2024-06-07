class Ecommerce {
    constructor() {
        this.products = []; 
        this.cart = []; 
        this.productld = productld;
        this.price = price;
    }

    

    addProduct(product) {
        this.products.push(product); 
      
    }

    setProductPrice(productld, price) {

        this.products.filter(() => { })

    }
}


const ecommerce = new Ecommerce();

ecommerce.addProduct({ name: "Product 1", price: 10 });
ecommerce.addProduct({ name: "Product 2", price: 20 });
ecommerce.addProduct({ name: "Product 3", price: 30 });


console.log(ecommerce.products);



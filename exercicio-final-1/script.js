class Ecommerce {
    constructor() {
        this.products = []; 
        this.cart = []; 
    }

    

    addProduct(product) {
        this.products.push(product); 
      
    }

    setProductPrice(productId, newPrice) {
        this.products.forEach((product) => { 
            if (product.id === productId) {
                product.price = newPrice;
            }
        });
    }

    getAllProducts() {
        return this.products;
    }

    getAllProductsName(){
        return this.products.map((product) => {return product.name}).join(";");
    }

    getProductById (id) {
        return this.products.filter((product) => {return product.id == id});
       
    }

    getProductByName (name) {
        const gpbn = this.products.filter((product) => { return product.name == name});
        console.log(gpbn);
    }

    getProductsByPrice(initialPrice, finalPrice) {
        return this.products.filter((product) => {
            return product.price >= initialPrice && product.price <= finalPrice;
        });
       
    }

    addProductToCart (product) {
        return this.cart.push(product); 
    }

    getCart () {
        return this.cart;
    }

    getCartTotalPrice () {
        return this.products.reduce((total, product) => total + product.price,
    0, )
    }
}


const ecommerce = new Ecommerce();

ecommerce.addProduct({ name: "Product 1", price: 10, id:1 });
ecommerce.addProduct({ name: "Product 2", price: 20, id:2 });
ecommerce.addProduct({ name: "Product 3", price: 30, id:3});
ecommerce.setProductPrice("Product 1", "5")
ecommerce.addProductToCart(ecommerce.getProductById(1));
ecommerce.addProductToCart(ecommerce.getProductById(2));
ecommerce.getAllProducts();
ecommerce.getProductById(2);
ecommerce.getProductByName("Product 1");
ecommerce.getProductsByPrice(0, 25);
console.log(ecommerce.products);
console.log(ecommerce.getAllProductsName());
console.log(ecommerce.getCart());
console.log(ecommerce.getCartTotalPrice())




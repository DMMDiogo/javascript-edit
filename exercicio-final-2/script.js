const loadProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products)

    const gridContainer = document.createElement("div");
    gridContainer.className ="grid";
    document.body.appendChild(gridContainer);
    
    
    products.forEach((product) => {
    const gridElement = document.createElement("div");
    gridElement.className ="productCard";
    gridContainer.appendChild(gridElement);

    const productImage = document.createElement("img")
    productImage.className = "productImage";
    productImage.src = product.image;
    gridElement.appendChild(productImage);

    const productName = document.createElement("h3");
    productName.className = "productTitle";
    productName.textContent = product.title;
    gridElement.appendChild(productName);

    const addCart = document.createElement("button");
    addCart.className = "buttonCart";
    addCart.textContent = "Add to Cart";
    gridElement.appendChild(addCart);
    addCart.addEventListener("click", () => {addToCart(product.id)})

    
    });
} 

const cart = [];

const createCart = document
const addToCart = async (productId) => {
    const cartEndpoint = "https://fakestoreapi.com/carts/7";
    const currentDate = new Date().toISOString().split('T')[0];
    const userId = 1; 
    const products = [{ productId: productId, quantity: 1 }];
    

    const cartData = {
        userId: userId,
        date: currentDate,
        products: products
    };

    if (cart.find(item => item[0].productId === productId))  {
        products[0].quantity++
    }

    else {
        cart.push(products);
        console.log(products[0].quantity)
    }




    try {
        const response = await fetch(cartEndpoint, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartData)
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("Error adding product to cart:", error);
    }

    console.log(cart)
};

loadProducts();


   

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

const addToCart = async (productId) => {
    const cartEndpoint = "https://fakestoreapi.com/carts/7";
    const currentDate = new Date().toISOString().split('T')[0];
    const userId = 1; 
    
    

    const existingProduct = cart.find(item => item.productId === productId);

    console.log(existingProduct)

    const cartData = {
        userId: userId,
        date: currentDate,
        products: cart
    };
   
    if (existingProduct)  {
        const lastIndex = cart.length - 1;
        cart[lastIndex].quantity++
        
        
    }

    else {
        let products = { productId: productId, quantity: 1 };
        cart.push(products);
        
        
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

    console.log(cartData)
};

loadProducts();


   

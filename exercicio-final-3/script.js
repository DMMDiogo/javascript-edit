const loadProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const info = await response.json();


    const createProducts = () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const title = document.createElement("h3");
        title.textContent = info.title;
        div.appendChild(title)
        const price = document.createElement("p");
        price.textContent = info.price;
        div.appendChild(price)
    }

    createProducts()
}

loadProducts()

const loadRelatedProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
    const info = await response.json();

console.log(info)

info.forEach(element => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    const title = document.createElement("h3");
    title.textContent = element.title;
    div.appendChild(title);

    const price = document.createElement("p");
    price.textContent = element.price; 
    div.appendChild(price);
});
    
}


loadRelatedProducts()
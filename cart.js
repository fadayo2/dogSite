const data = JSON.parse(localStorage.getItem('cart'));
const cartBody = document.getElementById('cartBody');

console.log(data);

const load = () => {
    // Clear existing content in the cart body
    cartBody.innerHTML = '';

    data.forEach(item => {
        const product = document.createElement('div');
        product.classList.add('productInCart')

        const productName = document.createElement('h1');
        productName.textContent = item.name;

        const productPrice = document.createElement('h1');
        productPrice.textContent = '#' + item.price;

        const productQuantity = document.createElement('h1');
        productQuantity.textContent = item.quantity;

        const productImage = document.createElement('img');
        productImage.setAttribute('src',item.image);
        // productImage.classList.add('img');

        const button = document.createElement('button');
        const btnTxt = document.createTextNode('Remove from Cart');
        button.appendChild(btnTxt);
        button.classList.add('btn');

        product.appendChild(productImage);
        product.appendChild(productName);
        product.appendChild(productPrice);
        product.appendChild(productQuantity);
        product.appendChild(button);

        cartBody.appendChild(product);
    });
}

// Call the load function to initially populate the cart
load();

const data = JSON.parse(localStorage.getItem('cart'));
const cartBody = document.getElementById('cartBody');

console.log(data);

const load = () => {
    // Clear existing content in the cart body
    cartBody.innerHTML = '';

    // Check if the data array is empty
    if (!data || data.length === 0) {
        // Display a message indicating that the cart is empty
        const emptyCartMessage = document.createElement('div');
        emptyCartMessage.textContent = 'Cart is empty';
        cartBody.appendChild(emptyCartMessage);
        emptyCartMessage.classList.add('cartMsg')
        return;
    }

    data.forEach(item => {
        const product = document.createElement('div');
        product.classList.add('productInCart');

        const productName = document.createElement('h1');
        productName.textContent = item.name;

        const productPrice = document.createElement('h1');
        productPrice.textContent = '#' + item.price;

        const productQuantity = document.createElement('h1');
        productQuantity.textContent = item.quantity;

        const productImage = document.createElement('img');
        productImage.setAttribute('src', item.image);
        // productImage.classList.add('img');

        const button = document.createElement('button');
        button.textContent = 'Remove from Cart';
        button.classList.add('btn');
        button.addEventListener('click', () => {
            // Remove the item from the cart data array
            const index = data.findIndex(cartItem => cartItem.id === item.id);
            if (index !== -1) {
                data.splice(index, 1);
                // Update localStorage with the modified cart data
                localStorage.setItem('cart', JSON.stringify(data));
                // Remove the product from the cart display
                product.remove();
                // Reload the cart to update the display
                load();
            }

            var notyf = new Notyf(
                {
                    duration: 3000,
                    position : {
                        x : 'center',
                        y : 'top'
                    },
                    
                    dismissible: true,
                }
            );
            // Display a success notification
            notyf.success('Item successfully removed from cart');
        });

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

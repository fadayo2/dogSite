const productData = JSON.parse(localStorage.getItem('selectedProduct'));

console.log(productData);

let pImg = document.getElementById('pImg');
let pName = document.getElementById('pName');
let pPrice = document.getElementById('pPrice');
let cartCount = document.getElementById('count');

const load = () => {
    pImg.style.background = `url(${productData.image})`;
    pName.innerHTML = productData.name;
    pPrice.innerHTML = '₦' + '  ' + productData.price;
}

// Function to update the cart count display
const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCount = 0;
    cartItems.forEach(item => totalCount += item.quantity);
    cartCount.textContent = totalCount;
}

// Function to handle adding the product to cart
const addToCart = () => {
    // Retrieve existing cart items from localStorage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product is already in the cart
    const existingProductIndex = cartItems.findIndex(item => item.id === productData.id);
    
    if (existingProductIndex !== -1) {
        // If the product is already in the cart, update its quantity
        cartItems[existingProductIndex].quantity++;
    } else {
        // If the product is not in the cart, add it to the cart
        productData.quantity = 1;
        cartItems.push(productData);
    }
    
    // Store the updated cart items back in localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    // Update the cart count display
    updateCartCount();
    
    // Optionally, you can provide feedback to the user that the product was added to the cart
    // alert(productData.name + " added to cart!");

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
    notyf.success('Item added successfully to cart');
    
}

// Call the load function to populate the product details
load();

// Attach an event listener to the "Add to Cart" button
document.getElementById('addToCartButton').addEventListener('click', addToCart);

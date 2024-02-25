document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add');
    const cartCount = document.getElementById('count');
    
    // Function to update the cart count display
    function updateCartCount() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        let totalCount = 0;
        cartItems.forEach(item => totalCount += item.quantity);
        cartCount.textContent = totalCount;
    }

    // Update cart count display when the page loads
    updateCartCount();

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const productId = button.dataset.productId;
            const productName = button.dataset.productName;
            const productPrice = parseFloat(button.dataset.productPrice);
            const productImage = button.dataset.productImage;

            console.log("Product ID:", productId);
            console.log("Product Name:", productName);
            console.log("Product Price:", productPrice);
            
            // Ensure productId and productPrice are not null
            if (!productId || !productPrice) {
                console.error("Error: Product ID or Price is missing!");
                return; // Exit the function if productId or productPrice is null
            }

            // Create an object representing the product
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage
            };

            // Retrieve existing cart items from localStorage or initialize an empty array
            let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the product is already in the cart
            const existingProductIndex = cartItems.findIndex(item => item.id === productId && item.name === productName && item.image === productImage);

            if (existingProductIndex !== -1) {
                // If the product is already in the cart, update its quantity
                cartItems[existingProductIndex].quantity++;
            } else {
                // If the product is not in the cart, add it to the cart
                product.quantity = 1;
                cartItems.push(product);
            }

            // Store the updated cart items back in localStorage
            localStorage.setItem('cart', JSON.stringify(cartItems));

            // Update the cart count display
            updateCartCount();

            // Optionally, you can provide feedback to the user that the product was added to the cart
            // alert(productName + " added to cart!");
            
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
        });
    });

    // Get all product cards
    const productCards = document.querySelectorAll('.productCard');

    // Add click event listener to each product card
    // Add click event listener to each product card
productCards.forEach(function(card) {
    card.addEventListener('click', function() {
        // Extract the product details from the card
        const productId = card.dataset.productId;
        const productName = card.dataset.productName;
        const productPrice = parseFloat(card.dataset.productPrice);
        const productImage = card.dataset.productImage;

        // Check if any of the product details are null or undefined
        if (!productId || !productName || isNaN(productPrice) || !productImage) {
            console.error('Error: Invalid product data on product card.');
            return;
        }

        // Create an object representing the product
        const product = {
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage
        };

        try {
            // Store the product details in localStorage
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            console.log('Product details stored in localStorage:', product);
        } catch (error) {
            console.error('Error storing product details in localStorage:', error);
        }

        // Construct the URL of the product page
        const productPageUrl = 'productPage.html'; // Replace with your actual product page URL
        // Redirect the user to the product page
        window.location.href = productPageUrl;
    });
});
    });

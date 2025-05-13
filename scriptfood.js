window.addEventListener('load', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    setTimeout(() => {
        welcomeScreen.classList.add('hide');
    }, 2000);
});

const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
let cart = [];
let totalPrice = 0;

function addToCart(item) {
    cart.push(item);
    totalPrice += item.price;
    updateCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    document.getElementById('cart-count').innerText = `(${cart.length})`;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const menuItem = button.closest('.menu-item');
        const name = menuItem.querySelector('h3').innerText;
        const price = parseFloat(menuItem.querySelector('p').innerText.replace('$', ''));
        addToCart({ name, price });
    });
});

document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert(`Your total is $${totalPrice.toFixed(2)}. Thank you for your order!`);
    cart = [];
    totalPrice = 0;
    updateCart();
});

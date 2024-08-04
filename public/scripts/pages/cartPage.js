// Array of cart items
const cartItems = [
    { id: 1, name: 'מזון חתולים 1', brand: 'מותג א', type: 'מזון יבש', price: 15, quantity: 1, imgSrc: 'https://via.placeholder.com/150' },
    { id: 2, name: 'מזון חתולים 2', brand: 'מותג ב', type: 'מזון רטוב', price: 25, quantity: 2, imgSrc: 'https://via.placeholder.com/150' },
    { id: 3, name: 'מזון חתולים 3', brand: 'מותג ג', type: 'חטיפים', price: 5, quantity: 3, imgSrc: 'https://via.placeholder.com/150' },
    { id: 4, name: 'מזון חתולים 4', brand: 'מותג ד', type: 'מזון יבש', price: 15, quantity: 1, imgSrc: 'https://via.placeholder.com/150' },
    { id: 5, name: 'מזון חתולים 5', brand: 'מותג ה', type: 'מזון רטוב', price: 25, quantity: 2, imgSrc: 'https://via.placeholder.com/150' },
    { id: 6, name: 'מזון חתולים 6', brand: 'מותג ו', type: 'חטיפים', price: 5, quantity: 3, imgSrc: 'https://via.placeholder.com/150' }
];

// Function to render cart items
function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    container.innerHTML = ''; // Clear existing items
    let totalPrice = 0;

    cartItems.forEach(item => {
        totalPrice += item.price * item.quantity;
        const itemHTML = `
            <div class="col-12 mb-4">
                <div class="card card-horizontal">
                    <img src="${item.imgSrc}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.brand} - ${item.type}</p>
                        <p class="card-text">₪${item.price}</p>
                        <div class="d-flex align-items-center">
                            <input type="number" class="form-control mr-3" value="${item.quantity}" min="1" style="width: 60px;" onchange="updateQuantity(${item.id}, this.value)">
                            <button class="btn btn-info mr-3" onclick="showInfo(${item.id})">מידע</button>
                            <button class="btn btn-danger" onclick="removeFromCart(${item.id})">הסר</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', itemHTML);
    });

    document.getElementById('total-price').innerText = `סך הכל: ₪${totalPrice.toFixed(2)}`;
}

// Function to update item quantity
function updateQuantity(itemId, newQuantity) {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
        item.quantity = parseInt(newQuantity);
        renderCartItems();
    }
}

// Function to show item info
function showInfo(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
        alert(`מידע על ${item.name}:\nמותג: ${item.brand}\nסוג: ${item.type}\nמחיר: ₪${item.price}`);
    }
}

// Function to remove item from cart
function removeFromCart(itemId) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    if (itemIndex > -1) {
        cartItems.splice(itemIndex, 1);
        renderCartItems(); // Re-render the items after removal
    }
}

// Render cart items on page load
document.addEventListener('DOMContentLoaded', renderCartItems);
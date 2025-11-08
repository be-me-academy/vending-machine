let items = [
    { code: 'A1', name: 'Cola', price: 15.00 },
    { code: 'A2', name: 'Sprite', price: 15.00 },
    { code: 'A3', name: 'Water', price: 10.00 },
    { code: 'B1', name: 'Chips', price: 20.00 },
    { code: 'B2', name: 'Cookies', price: 17.50 },
    { code: 'B3', name: 'Candy', price: 12.50 },
    { code: 'C1', name: 'Pretzels', price: 25.00 },
    { code: 'C2', name: 'Gum', price: 1.25 },
    { code: 'C3', name: 'Nuts', price: 5.00 }
];

let cart = [];
let insertedAmount = 0;


function showMoney(money) {
    // (1) TODO: Display amount of money to user in cart area
    // Hint: Use DOM to set textContent of element that has id 'insertedMoney'
}

function showMessage(msg) {
    // (2) TODO: Display message to user in message area
    // Hint: Use DOM to set textContent of element that has id 'messageArea'
}

function renderItems() {
    const itemGrid = document.getElementById('itemGrid');
    itemGrid.innerHTML = '';
    
    items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        
        itemDiv.innerHTML = `
            <div class="item-code">${item.code}</div>
            <div class="item-name">${item.name}</div>
            <div class="item-price">฿${item.price.toFixed(2)}</div>
        `;
        
        itemDiv.onclick = () => {
            addToCart(index);
        };
        
        itemGrid.appendChild(itemDiv);
    });
}

function addToCart(index) {
    // (3) TODO: Add item to cart by index, then use function showMessage() to update display
    
    updateCart();
}

function removeFromCart(index) {
    // (4) TODO: Remove item from cart at index, then use function showMessage() to update display
    
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div style="text-align: center; font-weight: bold; color: #f57f17; padding: 20px;">Cart is empty<br>Click items to add</div>';
    } else {
        cartItemsDiv.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.code} - ${item.name}</div>
                    <div class="cart-item-price">฿${item.price.toFixed(2)}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})">✕</button>
            `;
            cartItemsDiv.appendChild(cartItemDiv);
        });
    }
    
    // (5) TODO: Calculate total items, total price and change
    
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
    document.getElementById('changeAmount').textContent = change >= 0 ? change.toFixed(2) : '0.00';
}

function insertMoney(amount) {
    // (6) TODO: Update inserted amount, then use function showMoney() to update display
    
    updateCart();
    showMessage(`Inserted ฿${amount.toFixed(2)}`);
}

function checkout() {
    if (cart.length === 0) {
        showMessage('Cart is empty! Add items first');
        return;
    }

    console.log(cart)
    
    // (7) TODO: Calculate total price and change
    
    // Display items in dispenser
    const dispensedArea = document.getElementById('dispensedArea');
    dispensedArea.innerHTML = '';
    cart.forEach(item => {
        const dispensedItem = document.createElement('div');
        dispensedItem.className = 'dispensed-item';
        dispensedItem.textContent = item.name;
        dispensedArea.appendChild(dispensedItem);
    });
    
    if (change > 0) {
        setTimeout(() => {
            const changeDiv = document.createElement('div');
            changeDiv.className = 'dispensed-item';
            changeDiv.style.background = 'linear-gradient(135deg, #ffd54f 0%, #ffb300 100%)';
            changeDiv.textContent = `CHANGE: ฿${change.toFixed(2)}`;
            dispensedArea.appendChild(changeDiv);
        }, 500);
    }
    
    showMessage(`Thank you! Change: ฿${change.toFixed(2)}`);
    
    // Reset after 3 seconds
    setTimeout(() => {
        // (8) TODO: Reset inserted amount and clear cart, then use function showMoney() to update display
        
        dispensedArea.innerHTML = '';
        showMessage('Click items to add to cart');
        updateCart();
        renderItems();
    }, 3000);
    
    renderItems();
}

function returnMoney() {
    if (insertedAmount > 0) {
        const dispensedArea = document.getElementById('dispensedArea');
        dispensedArea.innerHTML = `<div class="dispensed-item" style="background: linear-gradient(135deg, #ffd54f 0%, #ffb300 100%);">RETURNED: ฿${insertedAmount.toFixed(2)}</div>`;
        showMessage(`Returned ฿${insertedAmount.toFixed(2)}`);
        
        setTimeout(() => {
            // (9) TODO: Reset inserted amount, then use function showMoney() to update display

            dispensedArea.innerHTML = '';
            updateCart();
        }, 2000);
    } else {
        showMessage('No money to return');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderItems();
    updateCart();
});
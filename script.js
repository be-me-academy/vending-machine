// Product data
let items = [
    { code: 'A1', name: 'Cola', price: 15 },
    { code: 'A2', name: 'Sprite', price: 15 },
    { code: 'A3', name: 'Water', price: 10 },
    { code: 'B1', name: 'Chips', price: 20 },
    { code: 'B2', name: 'Cookies', price: 18 },
    { code: 'B3', name: 'Candy', price: 13 },
    { code: 'C1', name: 'Pretzels', price: 25 },
    { code: 'C2', name: 'Gum', price: 5 },
    { code: 'C3', name: 'Nuts', price: 18 }
];

// Variables
let cart = [];
let currentMoney = 0;

// Insert money
function insertMoney(amount) {
    // TODO 1: เพิ่มจำนวนเงินที่ใส่เข้ามา
    // คำใบ้: บวกค่า amount เข้ากับ currentMoney
    
    
    document.getElementById('money').textContent = currentMoney;
    
    showMessage('Inserted ฿' + amount);
    updateCart();
}

// Return money
function returnMoney() {
    if (currentMoney > 0) {
        const dispensedArea = document.getElementById('dispensedArea');
        dispensedArea.innerHTML = '<div class="dispensed-item">Returned: ฿' + currentMoney + '</div>';
        
        showMessage('Returned ฿' + currentMoney);
        
        // รอ 2 วินาที แล้วจึงลบข้อความและรีเซ็ตค่า
        setTimeout(function() {
            // TODO 2: รีเซ็ตเงินที่ใส่เข้ามาเป็น 0
            // คำใบ้: ตั้งค่า currentMoney = 0
            
            
            document.getElementById('money').textContent = '0';
            dispensedArea.innerHTML = '';
            updateCart();
        }, 2000);
    } else {
        showMessage('No money to return');
    }
}

// Display all items
function renderItems() {
    const itemGrid = document.getElementById('itemGrid');
    itemGrid.innerHTML = '';
    
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.onclick = function() {
            addToCart(i);
        };
        
        itemDiv.innerHTML = `
            <div class="item-code">${item.code}</div>
            <div class="item-name">${item.name}</div>
            <div class="item-price">฿${item.price}</div>
        `;
        
        itemGrid.appendChild(itemDiv);
    }
}

// Add item to cart
function addToCart(index) {
    // TODO 3: เพิ่มสินค้าเข้าตะกร้า
    // คำใบ้: ดึงข้อมูลสินค้าจาก items[index] แล้ว push เข้า cart
    // อย่าลืมใช้ { ...item } เพื่อคัดลอกข้อมูล
    
    
    showMessage('Added ' + item.name + ' to cart');
    updateCart();
}

// Remove item from cart
function removeFromCart(index) {
    // TODO 4: ลบสินค้าออกจากตะกร้า
    // คำใบ้: ใช้ array method ที่สามารถลบข้อมูลตาม index ได้ (splice)
    
    
    showMessage('Item removed from cart');
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    
    // Show cart items
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="empty-cart">Cart is empty</div>';
    } else {
        cartItemsDiv.innerHTML = '';
        for (let i = 0; i < cart.length; i++) {
            const item = cart[i];
            
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <div>
                    <div style="font-weight: bold;">${item.code} - ${item.name}</div>
                    <div style="color: #4CAF50;">฿${item.price}</div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${i})">Remove</button>
            `;
            cartItemsDiv.appendChild(cartItemDiv);
        }
    }
    
    // TODO 5: คำนวณราคารวมของสินค้าทั้งหมดในตะกร้า
    // คำใบ้: วนลูปหาผลรวมของ cart[i].price ทั้งหมด
    let totalPrice = 0;
    
    
    // TODO 6: คำนวณเงินทอน
    // คำใบ้: เงินทอน = เงินที่ใส่เข้ามา - ราคารวม
    const change = 0;
    
    // TODO 7: แสดงจำนวนสินค้าทั้งหมดในตะกร้า (ใช้ DOM)
    // คำใบ้: ใช้ document.getElementById('totalItems') แล้วเปลี่ยน textContent
    // ตัวอย่าง: document.getElementById('totalItems').textContent = จำนวนสินค้า
    
    
    // TODO 8: แสดงราคารวมทั้งหมด (ใช้ DOM)
    // คำใบ้: ใช้ document.getElementById('totalPrice') แล้วเปลี่ยน textContent
    
    
    // TODO 9: แสดงเงินทอน (ใช้ DOM)
    // คำใบ้: ใช้ document.getElementById('changeAmount') แล้วเปลี่ยน textContent
    // ถ้าเงินทอนติดลบให้แสดง '0' แทน
    
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showMessage('Cart is empty! Add items first');
        return;
    }
    
    // TODO 10: คำนวณราคารวมของสินค้าทั้งหมด
    // คำใบ้: เหมือนกับใน TODO 5 - วนลูปหาผลรวม
    let totalPrice = 0;
    
    
    // TODO 11: ตรวจสอบว่าเงินที่ใส่มาพอหรือไม่
    // คำใบ้: คำนวณเงินทอน (currentMoney - totalPrice) และตรวจสอบว่าติดลบหรือไม่
    const change = 0;
    
    if (change < 0) {
        showMessage('Not enough money! Insert ฿' + (-change) + ' more');
        return;
    }
    
    // Show items in dispenser
    const dispensedArea = document.getElementById('dispensedArea');
    dispensedArea.innerHTML = '';
    for (let i = 0; i < cart.length; i++) {
        const dispensedItem = document.createElement('div');
        dispensedItem.className = 'dispensed-item';
        dispensedItem.textContent = cart[i].name;
        dispensedArea.appendChild(dispensedItem);
    }
    
    showMessage('Purchase complete! Change: ฿' + change);
    
    // รอ 3 วินาที แล้วจึงรีเซ็ตทุกอย่างเพื่อเริ่มใหม่
    setTimeout(function() {
        // TODO 12: รีเซ็ตตะกร้าและเงินที่ใส่เข้ามา
        // คำใบ้: ตั้งค่า cart เป็น array ว่าง [] และ currentMoney เป็น 0
        
        
        document.getElementById('money').textContent = '0';
        dispensedArea.innerHTML = '';
        showMessage('Click items to add to cart');
        updateCart();
    }, 3000);
}

// Show message
function showMessage(message) {
    document.getElementById('messageArea').textContent = message;
}

// Start the app
renderItems();
updateCart();
import data from '/data.js'

// display moods
const itemsContainer = document.querySelector('#items');
const itemList = document.getElementById('item-list');
const cartQty = document.getElementById('cart-qty');
const cartTotal = document.getElementById('cart-total');
// itemList.innerHTML = '<li> Hello World</li>';


for (let i = 0; i < data.length; i += 1) {
    // image & description div
    const imgDiv = document.createElement('div');
    imgDiv.className = 'itemImg';
    itemsContainer.appendChild(imgDiv);
    
    // images
	const newDiv = document.createElement('div');
	newDiv.className = 'item';
	const img = document.createElement('img');
	img.src = data[i].image;
	img.width = 300;
	img.height = 300;

	imgDiv.appendChild(img);
	itemsContainer.appendChild(newDiv);
    newDiv.appendChild(imgDiv);

    // description
    const desc = document.createElement('P');
    desc.innerText = data[i].desc;
    imgDiv.appendChild(desc);

    // price & button div
    const dataDiv = document.createElement('div');
    dataDiv.className = 'itemData';

    itemsContainer.appendChild(dataDiv);
    newDiv.appendChild(dataDiv);

    // price
    const price = document.createElement('P') ;
    price.innerText = data[i].price;

    dataDiv.appendChild(price);
    
    // button
    const button = document.createElement('button');
    button.id = data[i].name;
    button.dataset.price = data[i].price;
    button.innerHTML = "Add to Cart";

    dataDiv.appendChild(button);


}
const all_items_button = Array.from(document.querySelectorAll("button"));
all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'));
    showItems();
}));

// shopping cart
const cart = [];

// handle change events on update input
itemList.onchange = function(e) {
    if (e.target && e.target.classList.contains('update')) {
        const name = e.target.dataset.name;
        const qty = parseInt(e.target.value);
        updateCart(name, qty);
    }
}


// handle clicks on list
itemList.onclick = function(e) {
    const name = e.target.dataset.name; // data-name
    if (e.target && e.target.classList.contains('remove')) {
        removeItem(name);
    } else if (e.target && e.target.classList.contains('add-one')) {
        addItem(name);
    } else if (e.target && e.target.classList.contains('remove-one')) {
        removeItem(name, 1);
    }
}

function addItem(name, price) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1;
            showItems();
            return;
        }
    }
    const item = {name, price, qty: 1}
    cart.push(item);
}

// show items
function showItems() {
    const qty = getQty();
    // console.log(`You have ${qty} items in your cart`);
    cartQty.innerHTML = `You have ${qty} items in your cart`;

    let itemStr = '';

    for (let i = 0; i < cart.length; i += 1) {
        // console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`);
        // const name = cart[i].name;
        // const price = cart[i].price;
        // const qty = cart[i].qty;
        const {name, price, qty} = cart[i]
        itemStr += `<li>${name} $${price} x ${qty} = ${qty * price} 
        <button class = 'remove' data-name = '${name}'>Remove</button>
        <button class = 'add-one' data-name = '${name}'> + </button>
        <button class = 'remove-one' data-name = '${name}'> - </button>
        <input class = 'update' type = 'number' min = '0' data-name = '${name}'>
        </li>`;
    }
    itemList.innerHTML = itemStr;

    cartTotal.innerHTML = `Total in cart: $${getTotal()}`;
}

// get quantity
function getQty() {
    let qty = 0;
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty;
    }
    return qty;
}

// get total
function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty;
    }
    return total.toFixed(2);
}

// remove item
function removeItem(name, qty = 0) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            if (qty > 0) {
                cart[i].qty -= qty;
            }
            if (cart[i].qty < 1 || qty === 0) {
                cart.splice(i, 1);
            }
            showItems()
            return;
        }
    }
}

// update cart
function updateCart(name, qty) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            if (qty < 1) {
                removeItem(name);
                return;
            }
            cart[i].qty = qty;
            showItems();
            return;
        }
    }
} 

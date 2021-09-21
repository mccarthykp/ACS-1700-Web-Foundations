import data from '/data.js'

// display moods
const itemsContainer = document.querySelector('#items');

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

// shopping cart
const cart = [ ];

function addItem(name, price) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1;
            return;
        }
    }
    const item = {name, price, qty: 1}
    cart.push(name);
}

// show items
function showItems() {
    const qty = getQty();
    console.log(`You have ${qty} items in your cart`);

    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`);
    }

    console.log(`Total in cart: $${getTotal()}`);
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
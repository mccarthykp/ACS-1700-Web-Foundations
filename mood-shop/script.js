import data from '/data.js'

// display moods
const itemsContainer = document.querySelector('#items')

for (let i = 0; i < data.length; i += 1) {
    // image & description div
    const imgDiv = document.createElement('div');
    imgDiv.className = 'itemImg'
    itemsContainer.appendChild(imgDiv)
    
    
    // images
	const newDiv = document.createElement('div');
	newDiv.className = 'item'
	const img = document.createElement('img');
	img.src = data[i].image
	img.width = 300
	img.height = 300

	imgDiv.appendChild(img)
	itemsContainer.appendChild(newDiv)
    newDiv.appendChild(imgDiv)

    // description
    const desc = document.createElement('P')
    desc.innerText = data[i].desc
    imgDiv.appendChild(desc)

    // price & button div
    const dataDiv = document.createElement('div')
    dataDiv.className = 'itemData'

    itemsContainer.appendChild(dataDiv)
    newDiv.appendChild(dataDiv)

    // price
    const price = document.createElement('P') 
    price.innerText = data[i].price

    dataDiv.appendChild(price)
    
    // button
    const button = document.createElement('button')
    button.id = data[i].name
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"

    dataDiv.appendChild(button)


}

// shopping cart

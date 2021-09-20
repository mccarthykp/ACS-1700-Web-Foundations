import data from '/resources/data.js'
const itemsContainer = document.querySelector('#items')

for (let i = 0; i < data.length; i += 1) {
	const newDiv = document.createElement('div');
	newDiv.className = 'item'
	const img = document.createElement('img');
	img.src = data[i].images
	img.width = 300
	img.height = 300
	newDiv.appendChild(img)
	console.log(img) 
	itemsContainer.appendChild(newDiv)

    // data
    const desc = document.createElement('P')
    desc.innerText = data[i].desc
    newDiv.appendChild(desc)
    
    // price
    const price = document.createElement('P') 
    price.innerText = data[i].price
    newDiv.appendChild(price)
    
    // button
    const button = document.createElement('button')
    button.id = data[i].name
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)


}
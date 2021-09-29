const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')
const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')

// challenge 5

billInput.addEventListener('input', function(e) {
    
    let billAmount = parseFloat(billInput.value)
    let percent = parseFloat(tipInput.value)
    // const numPeople = parseInt(peopleInput.value)

    if (isNaN(billAmount)) {
        billAmount = 0
    }

    if (isNaN(percent)) {
        percent = 0
    }
    
    const tip = billAmount * percent / 100
    const total = billAmount + tip
    displayTotal.innerHTML = total.toFixed(2)
    displayTip.innerHTML = tip.toFixed(2)
    
})

tipInput.addEventListener('input', function(e) {
    let billAmount = parseFloat(billInput.value)
    let percent = parseFloat(tipInput.value)
    // const numPeople = parseInt(peopleInput.value)

    if (isNaN(billAmount)) {
        console.log('entering empty bill amount')
        billAmount = 0
    }

    if (isNaN(percent)) {
        percent = 0
    }
    
    
    const tip = billAmount * percent / 100
    const total = billAmount + tip
    displayTotal.innerHTML = total.toFixed(2)
    displayTip.innerHTML = tip.toFixed(2)
    // const perPerson = total / numPeople 
    
})

peopleInput.addEventListener('input', function(e) {
    let billAmount = parseFloat(billInput.value)
    let percent = parseFloat(tipInput.value)
    let numPeople = parseInt(peopleInput.value)

    if (isNaN(billAmount)) {
        billAmount = 0
    }

    if (isNaN(percent)) {
        percent = 0
    }

    if (isNaN(numPeople)) {
        numPeople = 1
    }

    if (numPeople == 0) {
        numPeople = 1
    }
    
    let tip = billAmount * percent / 100
    let total = billAmount + tip
    const totalPerPerson = total / numPeople
    const tipPerPerson = tip / numPeople

    tip = tipPerPerson
    total = totalPerPerson

    displayTotal.innerHTML = total.toFixed(2)
    displayTip.innerHTML = tip.toFixed(2)
})
let r = parseFloat(document.getElementById('d').value)
document.addEventListener('input', onInput);

function onInput(e) {
    console.log(e.target.value)
    select_value = document.getElementById('select_topping').value
    let toppings_cost = 0;
        if (select_value == 'none') {
            toppings_cost = 0
        // target = Cheese topping
        } else if (select_value == 'cheese') {
            toppings_cost = .05
        // target = Pepperoni topping
        } else if (select_value == 'pepperoni') {
            toppings_cost = .08
        // target = Sausage topping
        } else if (select_value == 'sausage') {
            toppings_cost = .08
        // target = Onion topping
        } else if (select_value == 'onion') {
            toppings_cost = .08
        // target = Tomatoes topping
        } else if (select_value == 'tomatoes') {
            toppings_cost = .08
        }

    if (e.target.matches('input[label=Name]')) {
        document.getElementById('name-reader').innerHTML = e.target.value;
    // target = Diameter of pizza
    } else if (e.target.matches('input[label=Diameter]')) {
        document.getElementById('diameter-reader').innerHTML = e.target.value + '"';
        document.getElementById('outputPizza').style.height = e.target.value + 'px';
        document.getElementById('outputPizza').style.width = e.target.value + 'px';

        r = e.target.value / 2
        document.getElementById('cost-reader').innerHTML = '$' + (Math.PI * Math.pow(r, 2) * toppings_cost).toFixed(2)
    // target == Cheese topping
    } else if (select_value == 'cheese') {
        console.log(r)
        document.getElementById('cost-reader').innerHTML = '$' + (Math.PI * Math.pow(r, 2) * toppings_cost).toFixed(2)
    // target = Pepperoni topping
    } else if (select_value == 'pepperoni') {
        document.getElementById('cost-reader').innerHTML = '$' + (Math.PI * Math.pow(r, 2) * toppings_cost).toFixed(2)
    // target = Sausage topping
    } else if (select_value == 'sausage') {
        document.getElementById('cost-reader').innerHTML = '$' + (Math.PI * Math.pow(r, 2) * toppings_cost).toFixed(2)
    // target = Onion topping
    } else if (select_value == 'onion') {
        document.getElementById('cost-reader').innerHTML = '$' + (Math.PI * Math.pow(r, 2) * toppings_cost).toFixed(2)
    // target = Tomatoes topping
    } else if (select_value == 'tomatoes') {
        document.getElementById('cost-reader').innerHTML = '$' + (Math.PI * Math.pow(r, 2) * toppings_cost).toFixed(2)
    }
}
    

# Final Assessment

This is the final assessment for ACS 1700. The goal is to show what you have learned by building a small project.

You will build the project by writing HTML, CSS, and JS. 

## Pizza Order

We have a new 3d pizza printer. With simple instructions, it can make a pizza of any type and size! Gone are the days where the only option is a 12" pie when you feel you only want to eat a 7" pie. The system can print a pizza of any size up to 100". You are going to build an interactive order form.

The order form is made up of three boxes. Order Form, Order Details, and Order Visualization. You'll arrange these boxes in a grid. 

The system will allow users to add an order name, input the diameter of the pizza, and the topping. Currently, the printer allows for pizzas of 6" to 100" in diameter. Pizza toppings are: 

- Cheese
- Pepperoni
- Sausage
- Onion and Tomato

### Arrange it on a grid

The order form should contain three boxes. One with the order form, one with the order details, and the last will show an order visualization. 

You should arrange these elements using a CSS grid. 

### Order form 

The order form should contain three form elements and a heading. 

- Name input - an input type text
- Diameter input - an input type range with a min of 6 and max of 100
- Pizza Type Select - a select menu with options for Cheese, Pepperoni, Sausage, and Onion, and Tomato.

Treat the Select element like an input or other form element. Note the select tag looks like this: 

```HTML
<select id="select-shoe">
 <option>Vans</option>
 <option>Converse</option>
 <option>Nike</option>
</select>
```

This would create the drop-down menu showing three options. You can get the name of the current selection with: `selectElement.value`. Select element is a reference to `select#select-shoe`. 

### Order details 

This box should display information about the order. It should display the following: 

- Name of the order
- Diameter of the order
- Cost of the order

The cost is figured as: $0.25 per square inch for cheese pizzas, and $0.33 per square inch for all others. 

Calculate the area of a pizza as: `area = π * r * r`. Since the size is entered as diameter you'll need to divide this by 2 to get the radius. *Get the calculation correct we're a startup and overcharging customers could lead to bad press.*

You can use `Math.PI` to represent the value of π.

### Pizza Visualization 

The pizza visualizer should display a circle the size of the pizza. You can set the width and height of this element as 2 times the value entered as diameter. 

The size should be 12px to 200px.

## Strategy 

Start with the HTML mark-up. Don't overthink this. Keep it simple. Use a div or section to group the elements of each box.

Give the interactive elements an id name that you can use to connect it with your JS. Use good names! Remember, variable names can be confusing: 

- `diameter` might be: `32` (a number)
- `diameterInput` might be: `<input id="diameter-input">` (a DOM element)

The three sections need to have a parent element that will arrange them on a grid! 

### CSS

You might want to save this for last since CSS is easier to debug. 

### JS 

You should have three form elements, two inputs, and a select. Check the id name on each of these. Then define a variable for each and set the values using `document.querySelector()`. Use good names that will remind you that these are the input elements. 

If you have a problem log these to the console to check them. If they show up undefined or null check the spelling on the id name. 

You should have three outputs and the pizza visualizer. These can be any type of element. Give each an id and then define a variable using `document.querySelector()`. 

Use good variable names to remind you that these will display output. If you have a problem seeing something log these to the console. 

Next set up your event listeners. You should be listening for input at each of the three form elements. When a change occurs you'll want to update the display elements. If nothing is changing try logging something to the console in your handler function to make sure it's being called. 

Get the values from the form input. Be sure to convert the diameter to a number using `parseInt()` or `parseFloat()`. 

Calculate the area of the order using the formula. 

Check the pizza type and calculate the cost. 

Update the display elements with the new values using `innerHTML`. 

For the pizza visualization, you'll need to set the width and height style of the element! Something like: `el.style.width`. 

Example: 

![Example](example.gif)

## Stretch Goals

If you have solved the problem try these stretch goals. 

- Put your script and CSS in their file
- Set the type of your script to module
- Create a helpers JS file and export a function to calculate the area of a circle. 
- Import the area function in your main module. 
- Add a background picture to the circle in the pizza visualizer. Set the image based on the topping chosen. There are images in the images folder. (see the image below)
- Add a checkbox at the bottom of the order form for vegetarians. Display a note in the order details box if this is checked and add $0.05 per square inch to the cost. Give the pizza circle in the visualizer a green border if the vegetarian is checked. 
- Change the layout so the order form fills the left column with the other two boxes in the right column. (see the image below)

![Example](example-2.gif)

## Submission 

Submit your work on GradeScope. 
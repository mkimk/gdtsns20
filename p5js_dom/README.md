# P5.js DOM Elements
P5.js is a Javascript library based on Processing. One of the core reasons why p5.js interprets Processing to the browser is that your sketch is not just for a graphic canvas but the whole web page in your browser. In this workshop, we will walk through how we can play with HTML / CSS elements and events by using p5.js.

## What is DOM?
- Document Object Model 
- Programming interface for HTML and XML documents
- Treats a markup element as an object
- Constructed as a tree of objects: a brief example is here 👉 [Code Lab Session 4: Ready, set, loop — jQuery](https://github.com/RISD-Code-Lab/cl-spring2020/tree/master/session-04)

## How to use DOM elements in p5.js
- The DOM component is a part of the default p5.js distribution, no additional installation is needed.

- There are other p5.js libraries (e.g.,[p5.3d](https://github.com/FreddieRa/p5.3D)) to extend to the p5.js core functionality, check more libraries here: 👉[Using a Library](https://p5js.org/libraries/)


## How to create DOM elements 
- Basic syntax is `create` + `(element name)`. Based one this, you can create  `createP()`, `createButton()`, and more.
- However, not every DOM element works with this syntax. P5.js includes some # functions that are the most common DOM elements you may want to generate with code. In other elements that are not articulated on the [Reference > DOM](https://p5js.org/reference/), you will need to use `createElement`. 

## How to manipulate DOM elements

### Layout & Content
- `position()`: Sets an absolute position of the DOM element by adding a pixel coordinate of the entire page. If no position type argument is given, the position will be relative to (0, 0) of the window.
- `html()` : Appends/replaces a content on the element.


### DOM Events 
#### Input elements
- `createButton("label")`: Creates a <button></button> element in the DOM. 
- `createSlider(min, max, [value])`: Creates a slider <input></input> element in the DOM. The 3 main arguments are: minimum value, maximum value, and default value.
- `value()`, `value(value)`: Either returns the value of the element if no arguments given, or sets the value of the element.
- `createInput("value]")`: Creates an <input></input> element in the DOM for text input. You can set a default text on the textfield by setting value.


#### DOM Events
- `mousePressed()` 
- `mouseOver()` 
- `mouseOut()` 
- `changed()` is called when the value of an element changes. This can be used to attach an element specific event listener.
- `input()` is called when any user input is detected with an element. 


#### CallBack
```
function setup {
    var button = createButton(); //create a button
    button.mousePressed('changeColor'); //call back a function
}
function changeColor { //definition of the function
    color(random(255));
}
```

- A way to bind a particular set of codes to a particular action on the page


### Style with CSS
#### CSS
- CSS(Cascading Style Sheets) provide the **style** directives to marked-up content. CSS can determine visual & arrangement of presentation of HTML elements. 
- To apply a style, you will need to select an HTML element to apply your style. In CSS you can define your own selectors in the form of **Class**  `.classname` and **ID**`#idname` selectors. The big difference between class and ID is that Class is repeatable, whereas ID can be used only once. These selectors must be labeled as attributes in a html element (e.g.,`<p class="classname"></p>`)

- More about CSS:
    - [Mozilla: CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
    - [Mozilla Developer: Why Is CSS So Weird?](https://www.youtube.com/watch?v=aHUtMbJw8iA)


#### How to style CSS in p5.js
```
style(name of the property, style of the property);
```

#### CSS Selectors
- `select(name)` : You can select a certain HTML element or CSS selector in p5.js. You can point out the item by naming id, class, or tag name of the element to search for.
- `selectAll(name)`: Searches the page for elements with the given class or tag name (using the '.' prefix to specify a class and no prefix for a tag). 


## Other Resources
- [p5.js Reference > p5.Element](https://p5js.org/reference/#/p5.Element)
- [Reference for All DOM Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [Coding Train: 8: HTML / CSS / DOM](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX)
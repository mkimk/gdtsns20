# Working with Data
In this workshop, we will go through how we can use a quantity of data for your p5.js project. It includes two components: 1) JSON (how to write, read, embed the data in p5.js project), 2) API (how to pull data written by someone into your program). 

### Data visualization examples
- [Why Buses Bunch](https://setosa.io/bus/)
- [Weather gradient](http://weathergradient.com/)
- [Mapping 24 Emotions Conveyed by Brief Human Vocalization](https://s3-us-west-1.amazonaws.com/vocs/map.html)
- [Browsing Histories](https://labs.rs/en/browsing-histories/)

## Data formats
There are a few data formats that are standardized for computer to read. 

### JSON 
- *JavaScript Object Notation*.
- Widely used for storing, serializing, and transmitting structured data.
- A string of data 
- More read 👉 [Mozilla: Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

### CSV
- *Comma-separaated Values*. 
- Represents tabular data: a form of table in which values for each column of the table are separated by commas.
- Simple and light-weight, used to handle a huge amounts of data.
- Easy to use in a Spreadsheet Program.

### XML
- *eXtensible Markup Language*
- markup language without no predefined tags.
- simple text-based format for representing structured information: documents, data, configuration, books, transactions, invoices, and much more
- More read 👉[Mozilla: XML introduction](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction)

### Other filetype 
- text file, PDF, etc

## How to use JSON in p5.js

### Basic syntax

Basic JSON file is a **string** like the following, with the quotations around the brackets.

```js
color = {
    "name" : "mycolor",
    "r": "255",
    "g": "0",
    "b": "0"
}
```
All property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON.

JSON can have more than one object, which can be nested like below:
```js
var data = {
  myshape [
      { shape: circle, 
        r: 0,
        g: 255,
        b: 0 
      },
      { shape: square, 
          r: 255,
          g: 0,
          b: 0 
      },
  ]
}
```

### Data path
We need to figure out a path to get into this JSON objects. Simplpy you can call by using dots. 
- Examples: `color.r` `fill(color.r, color.g, color.b);`

#### Accessing Array items
If the property name is an array, use the number of index we are looking for. The order of an item in an array is called an index. Think of it as a numerical label. The position number starts at 0 (not 1.) 
- Example: `data.myshape[1].r` 


### How to use JSON data in your p5.js project
If you have a few object data, you can directly implement JSON and use it by calling the strings.

```js
var color;
function setup() {
  createCanvas(200,200);
  color = {
    name: "mycolor",
    r: 255,
    g: 0,
    b: 0
 }
}
function draw() {
  background(0);
  fill(color.r, color.g, color.b);
  text(color.name, 10, 50);
}
```


### Make a separate JSON
However, JSON can be easily builky and complex to load a lenth of data. In this case, JSON can be loaded into your project as a stand alone file. The difference is, there is no variable in this file. It is just an object that starts with the curly brackets.  
```js
 {
    "name" : "mycolor",
    "r": "255",
    "g": "0",
    "b": "0"
}
```

### Connect JSON to your p5.js

#### Preload
Calling `loadJSON()` inside `preload()` guarantees to complete the operation before setup() and draw() are called.

```js
var color;
function preload() {
  color = loadJSON("color.json");
}
function setup() {
  createCanvas(200,200);
}
function draw() {
  background(0);
  fill(color.r, color.g, color,b);
  text(color.name, 10, 50);
}
```

#### Callback
Besides of the preload, we can also use callback function. This is useful when you want to load the data over time. Below example demonstrates how to load data in a custom function and call back the function in `draw()`.

```js
var weatherData;
function setup() {
    createCanvas(1200, 600);
    loadJSON("http://api.openweathermap.org/data/2.5/group?id=5224151,5128581,1723862&units=metric&appid=da41b776483f6b58fc0dc17d649e9ab1", gotData, 'jsonp');
}
function gotData(data) {  
     weatherData = data;
} 
  
function draw() {
    background(0);
    if (weatherData) {
      for(var i = 0; i < weatherData.cnt; i++ ) {
            fill(255);
            circle((i + 1) * 300, 300, weatherData.list[i].main.temp * 10);
            text(weatherData.list[i].name, (i + 1) * 300 + weatherData.list[i].main.temp * 6, 300);
        }
    }
}
```

## API
Data is usually loaded as an external file or request it from an API. API stands for *Application Programming Interface*, it is a set of routines, protocols, and tools for building software applications. You can think API as a messenger that tells requests and tells a system what you want to do, and returns the response back.

## How to use API

### Query String
The question mark followed by the parameters and their values is referred to as the “query string". It assigns a parameter of data by querying a specific condition. In the query string, each parameter is listed one right after the other with an ampersand (`&`) separating them. The order of the query string parameters does not matter. You can see examples here 👉[Open Weather Map API calls](https://openweathermap.org/current)

*To review JSON file on browser, [JSON formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) plugin is useful.

More read 👉
- [Query String](https://en.wikipedia.org/wiki/Query_string)
- [Documenting APIs: Parameters](https://idratherbewriting.com/learnapidoc/docapis_doc_parameters.html#query_string_parameters)


### API Query with User Input




## Other Resources
- [Code Lab Session 4: Ready, set, loop — jQuery](https://github.com/RISD-Code-Lab/cl-spring2020/tree/master/session-04) 
- [Coding Train: 10: Working with Data](https://www.youtube.com/watch?v=rJaXOFfwGVw&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=1)




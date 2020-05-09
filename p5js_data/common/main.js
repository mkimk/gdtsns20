
var weatherData;
var url ="https://api.openweathermap.org/data/2.5/weather?q=";
var city = "London";
var apiKey ="&appid=da41b776483f6b58fc0dc17d649e9ab1";
var button;
var input;

function setup(){
    createCanvas(1400,700);
    input = createInput('London');
    button = createButton('submit');
    button.mousePressed(functionY);
}

function functionX(data) {
    weatherData = data;
  }

function functionY() {
    loadJSON(url + input.value() + apiKey, functionX, 'jsonp');
}

function draw(){
    background(0);
    if (weatherData) {
        fill(255);
        circle(700,700, weatherData.main.temp * 2);
        console.log(weatherData);
    }
}
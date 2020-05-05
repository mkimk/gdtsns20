var weatherData;
function setup () {
  loadJSON("http://api.openweathermap.org/data/2.5/group?id=5224151,5128581,1723862&units=metric&appid=da41b776483f6b58fc0dc17d649e9ab1", gotData, 'jsonp');
}
function gotData(data){
  weatherData = data;
}
function draw() {
  if (weatherData) {
    console.log(weatherData);
  }
}
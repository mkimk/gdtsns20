function setup(){
    createCanvas(windowWidth/2, windowHeight/2);
}

function windowResized() {
    resizeCanvas(windowWidth/2, windowHeight/2);
}

function draw(){
    var x = width / 2;
    var y = height / 2;
    var diameter = min(width, height) * 0.5;

    background('black');  
    fill('white');
    noStroke();
  
    circle(x, y, diameter);
}

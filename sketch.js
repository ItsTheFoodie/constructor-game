let sun;

function setup(){
    createCanvas(windowWidth, windowHeight);

   sun = new Circle(100, 100, 67,"#FFE09C");
}

function draw() {
    background("lightYellow");
    sun.show();
   
}
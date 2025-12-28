let sun;
let snowflakes = [];


function setup(){
    createCanvas(windowWidth, windowHeight);

   sun = new Circle(100, 100, 67,"#FFE09C");
   for (let i = 0; i < 4; i++) {
      snowflakes.push(new Circle(width/5+i*width/5,0, 70, "red"));
   }
}

function draw() {
    background("lightYellow");
    sun.show();

    snowflakes[0].show();
    snowflakes[1].show();
    snowflakes[2].show();
    snowflakes[3].show();

}

function mouseMoved(){
    sun.x = mouseX;
}

function mouseDragged(){
    sun.x = mouseX;
}
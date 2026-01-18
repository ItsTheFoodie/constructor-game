let sun;
let snowflakes = [];


function setup(){
    createCanvas(windowWidth, windowHeight);

   sun = new Circle(100,windowHeight/2, 67,"#FFE09C");
   for (let i = 0; i < 8; i++) {

      snowflakes.push(new Circle(width/8+i*width/5,0, 80, "lightBlue", 9.5+i));
   }
    for (let i = 0; i < 8; i++) {
    snowflakes.push(new Circle(width/8+i*width/5,-950, 80, "lightBlue", 8.5+i));
   }
    for (let i = 0; i < 8; i++) {
      snowflakes.push(new Circle(width/8+i*width/5,-950, 80, "lightBlue", 7.5+i));
   }
}


function draw() {
    background("lightYellow");
    sun.show();

    for (i=0; i < snowflakes.length; i++) {
        snowflakes[i].show();
        snowflakes[i].move();
    }


    

  
}

function mouseMoved(){
    sun.x = mouseX;
}

function mouseDragged(){
    sun.x = mouseX;
}


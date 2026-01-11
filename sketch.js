let sun;
let snowflakes = [];
let snowflake = [];
let sowflake = [];

function setup(){
    createCanvas(windowWidth, windowHeight);

   sun = new Circle(100,windowHeight/2, 67,"#FFE09C");
   for (let i = 0; i < 4; i++) {
      snowflakes.push(new Circle(width/5+i*width/5,0, 80, "red", 2));
   }
    for (let i = 0; i < 4; i++) {
      snowflake.push(new Circle(width/5+i*width/5,0, 80, "blue", 5));
   }
    for (let i = 0; i < 4; i++) {
      sowflake.push(new Circle(width/5+i*width/5,0, 80, "green", 10));
   }
}


function draw() {
    background("lightYellow");
    sun.show();

    for (i=0; i<4; i++) {
        snowflakes[i].show();
        snowflake[i].show();
        sowflake[i].show();
    }

    if(snowflakes[0].y > height/3){
        for (i=0; i<snowflakes.length; i++) {
            snowflakes[i].move();
        }
    }
   
    if(snowflake[0].y > height/3){
       for (i=0; i<snowflake.length; i++) {
        snowflake[0].move();
       }
    }

    if(sowflake[0].y > height){
       for (i=0; i<sowflake.length; i++) {    
        sowflake[0].y = 0;
      }
    }

function mouseMoved(){
    sun.x = mouseX;
}

function mouseDragged(){
    sun.x = mouseX;
}
}

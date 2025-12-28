let sun;
let snowflakes = [];
let snowflake = [];
let sowflake = [];

function setup(){
    createCanvas(windowWidth, windowHeight);

   sun = new Circle(100,windowHeight/2, 67,"#FFE09C");
   for (let i = 0; i < 4; i++) {
      snowflakes.push(new Circle(width/5+i*width/5,0, 80, "red"));
   }
    for (let i = 0; i < 4; i++) {
      snowflake.push(new Circle(width/5+i*width/5,0, 80, "blue"));
   }
    for (let i = 0; i < 4; i++) {
      sowflake.push(new Circle(width/5+i*width/5,0, 80, "green"));
   }
}


function draw() {
    background("lightYellow");
    sun.show();

    snowflakes[0].show();
    snowflakes[1].show();
    snowflakes[2].show();
    snowflakes[3].show();

    snowflakes[0].move();
    snowflakes[1].move();
    snowflakes[2].move();
    snowflakes[3].move();

    if(snowflakes[0].y > height/3){
        snowflake[0].move2();
        snowflake[1].move2();
        snowflake[2].move2();
        snowflake[3].move2();
    }
   
    if(snowflake[0].y > height/6){
        sowflake[0].move3();
        sowflake[1].move3();
        sowflake[2].move3();
        sowflake[3].move3();
    }


    snowflake[0].show();
    snowflake[1].show();
    snowflake[2].show();
    snowflake[3].show();

    sowflake[0].show();
    sowflake[1].show();
    sowflake[2].show();
    sowflake[3].show();

  
    
    // sowflake[0].move3();
    // sowflake[1].move3();
    // sowflake[2].move3();
    // sowflake[3].move3();

}

function mouseMoved(){
    sun.x = mouseX;
}

function mouseDragged(){
    sun.x = mouseX;
}
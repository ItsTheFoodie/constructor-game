let sun;
let red = [];
let blue = [];
let green = [];

function setup(){
    createCanvas(windowWidth, windowHeight);

   sun = new Circle(100,windowHeight/2, 67,"#FFE09C");
   for (let i = 0; i < 4; i++) {

      red.push(new Circle(width/5+i*width/5,0, 80, "red", 7.5+i));
   }
    for (let i = 0; i < 4; i++) {
    blue.push(new Circle(width/5+i*width/5,0, 80, "blue", 7.5+i));
   }
    for (let i = 0; i < 4; i++) {
      green.push(new Circle(width/5+i*width/5,0, 80, "green", 7.5+i));
   }
}


function draw() {
    background("lightYellow");
    sun.show();

    for (i=0; i<4; i++) {
        red[i].show();
        blue[i].show();
        green[i].show();
    }

    
    for (i=0; i<red.length; i++) {
            red[i].move();
    }
   
    if(red[0].y > height/3){
       for (i=0; i<blue.length; i++) {
        blue[i].move();
       }
    }

    if(blue[0].y > height/3){
        for (i=0; i<green.length; i++){
            green[i].move();
        }
    }
    

  
}

function mouseMoved(){
    sun.x = mouseX;
}

function mouseDragged(){
    sun.x = mouseX;
}


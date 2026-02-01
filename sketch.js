let sun;
let snowflakes = [];
let startTime;
let fade = 255; 





function setup(){
    createCanvas(windowWidth, windowHeight);
    startTime = millis();
    textAlign(CENTER, CENTER);
    textSize(40);

   sun = new Circle(100,windowHeight/2, 67,"#FFE09C");
   for (let i = 0; i < 8; i++) {

      snowflakes.push(new Circle(width/8+i*width/7,0, random(70,90), "lightBlue", random(4,18)));
   }

}


function draw() {
    background("lightYellow");
    sun.show();

    for (i=0; i < snowflakes.length; i++) {
        snowflakes[i].show();
        snowflakes[i].move();
    }
 
  let timePassed = millis() - startTime;

  let minutes = floor(timePassed / 60000);
  let seconds = floor(timePassed / 1000) % 60;
  let milliseconds = floor(timePassed / 10) % 100;
  textSize(35);
  text(minutes + " : " + seconds + " : " + milliseconds, width /2,100);
  text("Highscore: " + localStorage.getItem('HIGHSCORE'), width/2, 150)

  textFont('dancing script');
  fill(173, 216, 230, fade)
  textStyle(ITALIC);
  text("Move the sun with your mouse or finger to avoid the snowflakes!", width/2,50);

  if (fade > 0) {
    fade -= 1; 
  }
}

  


function mouseMoved(){
    sun.x = mouseX;
}

function mouseDragged(){
    sun.x = mouseX;
}


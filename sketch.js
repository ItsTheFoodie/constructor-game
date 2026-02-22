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

      snowflakes.push(new Circle(width/8+i*width/7,0, random(windowWidth/18,windowHeight/24), "lightBlue", random(11,19)));
   }
   if(localStorage.getItem('HIGHSCORE') == null){
localStorage.setItem('HIGHSCORE',0)
}
textWrap(CHAR)
}


function draw() {
    console.log(localStorage.getItem('HIGHSCORE'))
    background("lightYellow");
    sun.show();

     for (i=0; i < snowflakes.length; i++) {
  let space = dist(sun.x, sun.y, snowflakes[i].x, snowflakes[i].y);
    if (space < snowflakes[i].d/2 + sun.d/2) {
        noLoop();
    }
}

    for (i=0; i < snowflakes.length; i++) {
        snowflakes[i].show();
        snowflakes[i].move();
    }
 
  let timePassed = millis() - startTime;

  let minutes = floor(timePassed / 60000);
  let seconds = floor(timePassed / 1000) % 60;
  let milliseconds = floor(timePassed / 10) % 100;
  textSize(width/70);
  let timer = minutes + " : " + seconds + " : " + milliseconds;
  text(timer, width /2,width/20);
  text("Highscore: " + localStorage.getItem('HIGHSCORE'), width/2, width/15);
      if(timer > localStorage.getItem('HIGHSCORE')){
        localStorage.setItem('HIGHSCORE',timer)
    }


  textFont('Marck Script');
  fill(173, 216, 230, fade)
  textAlign(CENTER, TOP);
  textStyle(ITALIC);
  textSize(width/50);
  text("Move the sun with your mouse or finger to avoid the snowflakes!", width/2,width/39);

  if (fade > 0) {
    fade -= 1.8; 
  }
}
  


function mouseMoved(){
    sun.x = mouseX;
}

function mouseDragged(){
    sun.x = mouseX;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
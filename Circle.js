class Circle {
  constructor(x, y, d, c, s) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = c;
    this.s = s;
  }


show() {
  noStroke();
  fill(this.c);
  circle(this.x,this.y,this.d);
}

move() {
  this.y += this.s;
  if(this.y > height){
    this.y = 0;
    this.x = random(0,width);
  }
}

}
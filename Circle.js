class Circle {
  constructor(x, y, d,c) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = c;
  }


show() {
  noStroke();
  fill(this.c);
  circle(this.x,this.y,this.d);
}

move(){
  this.y += 10;
}
move2(){
  this.y += 10;
}

move3(){
  this.y += 10; 
}






}


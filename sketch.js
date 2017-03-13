var x = 0
var speed = 3;
function setup() {
createCanvas(600,400);
}

function draw() {
  background(50);
  if(mouseIsPressed){
      background(255,0,200);
  }
  
  stroke(255);
  strokeWeight(6);
  noFill();
  
  if(mouseY<150){
      fill(0,255,0);
  }
  else{
      noFill();
  }
  
  ellipse(x,200,100,100);
  
 
  if(x>width || x<0){
      console.log("CIRCLE IS OFF THE SCREEN!!!")
      speed = speed * -1;
  }
  x = x + speed;
  console.log(x);
}
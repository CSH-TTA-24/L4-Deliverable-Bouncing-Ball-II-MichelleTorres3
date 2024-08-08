let xPos = 250;
let yPos = 250;
let xDirection = 1;
let yDirection = 1;

function preload (){
  img = loadImage("Images/DVD logo.png")
}

function setup() {
  createCanvas(500, 500);
  background(0);
  xSpeed = 2;
  ySpeed = 2;
}

function draw(){
  background(0);
  fill(0, 255, 0);
  image(img, xPos, yPos, 50, 50);
  xPos += xSpeed * xDirection;
  yPos += ySpeed * yDirection;

  if(xPos < 25 || xPos > 475){
    xDirection *= -1;
  }

  if(yPos < 25 || yPos > 475){
    yDirection *= -1;
  }

}
  
  

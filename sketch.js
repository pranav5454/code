var wall1
function setup() {
  createCanvas(400,400);
  wall1=createSprite(200,200,5,100)
  
}

function draw() 

{
  background("black");

if (keyIsDown(RIGHT_ARROW)) {
wall1.position.x=wall1.position.x+10



}


if (keyIsDown(LEFT_ARROW)) {
wall1.position.x=wall1.position.x-10



}






  drawSprites()

}





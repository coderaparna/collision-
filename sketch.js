var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(300, 200, 70, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(500, 200, 80, 50);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background("yellow"); 
  //movingRect.x = mouseX;
 // movingRect.y = mouseY;
  
console.log(movingRect.width/2+fixedRect.width/2);
console.log(movingRect.x-fixedRect.x);

istouching();

  drawSprites();
}
function istouching(){
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 
    && fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 
    && fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2 ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
}
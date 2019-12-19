var rect_moving,rect_fixed;
var rect1,rect2;

function setup() {
  createCanvas(800,400);

  rect_fixed = createSprite(400, 200, 75, 75);
  rect_moving = createSprite(400, 200, 50, 50);

  rect1 = createSprite(600, 300, 50, 50);
  rect2 = createSprite(200, 300, 50, 50);

  rect1.shapeColor = "green";
  rect2.shapeColor = "white";

  rect1.velocityX = -5;
  rect2.velocityX = 5; 
}

function draw() {
  background(0,0,0); 
  rect_moving.x = World.mouseX;
  rect_moving.y = World.mouseY;
  
  if (isTouching(rect_moving,rect2)) {
    rect_moving.shapeColor  = "red";
    rect2.shapeColor = "red";
    fill("white");
    text("Rectangles are touching",200, 200);
  }
  else {
    rect2.shapeColor = "blue";
    rect_moving.shapeColor  = "blue";
  }
  fill("white");
  text("Move the rectangles to display the message", 100, 100);
  bounceOff(rect1,rect2);
  
  drawSprites();
}



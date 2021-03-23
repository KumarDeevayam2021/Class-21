var o2, o1;

function setup() {
  createCanvas(1200,800);
  o2 = createSprite(600, 400, 50, 80);
  o2.shapeColor = "green";
  o2.debug = true;
  o1 = createSprite(400,200,80,30);
  o1.shapeColor = "green";
  o1.debug = true;
}

function draw() {
  background(0,0,0);  
  o1.x = World.mouseX;
  o1.y = World.mouseY;
if (isTouching(o1,o2))
  {
    o1.shapeColor = "red";
    o2.shapeColor = "red";
  }
  else {
    o1.shapeColor = "green";
    o2.shapeColor = "green";
  }
  drawSprites();
}

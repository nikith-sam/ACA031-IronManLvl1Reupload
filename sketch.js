var ironman, ironmancollided;
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironman= loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  //bg.scale=0.5;
  bg.velocityY=3;

  iron = createSprite(200,505,20,50);
  iron.addImage(ironman);
  iron.scale =0.3;
  iron.setCollider("rectangle",0,0,800,800);
  //iron.debug=true;

  ground = createSprite(200,585,2000,10);
 
  ground.visible = false; 
}

function draw() {
  
  if(keyDown("up") ) {
    iron.velocityY = -16;
  }
  if(keyDown("down") ) {
    iron.velocityY = +16;
  }
  if(keyDown("left") ) {
    iron.velocityX = -16;
  }
  if(keyDown("right") ) {
    iron.velocityX = +16;
  }

  iron.velocityY = iron.velocityY + 0.5;
  iron.collide(ground);

  drawSprites();
   
}


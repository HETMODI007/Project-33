const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var snowBoy,snowboyImg;
var snow = [];


function preload(){
  bgImg = loadImage("snow1.jpg");
  snowboyImg = loadImage("snow boy.jpg");
}

function setup() {
  createCanvas(1350,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  snowBoy = createSprite(400, 250, 50, 50);
	snowBoy.addImage(snowboyImg);
	snowBoy.scale=0.4;
}

function draw() {
  background(bgImg);
  Engine.update(engine);
  ground.display();
  

  if(keyCode === LEFT_ARROW){
    snowBoy.x = snowBoy.x-2;
 }
 
 if(keyCode === RIGHT_ARROW){
 snowBoy.x = snowBoy.x+2;
}

if(frameCount%60===0){
  snow.push(new Snow(random(width/2-30, width/2+30), 10,10));
  
}

for (var j = 0; j < snow.length; j++) {

  snow[j].display();
}

  drawSprites();
}
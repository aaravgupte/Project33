const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snowfalling
var snowbg
var snow =[]
var maxDrops=100
var engine,world
function preload(){
snowbg=loadImage("snow2.jpg")

}




function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  for(var i=0;i<maxDrops;i++){
    snow.push(new Snow(random(0,800),random(0,400)))   
   }
}

function draw() {
  background(snowbg);
  Engine.update(engine)
  for(var i=0;i<maxDrops;i++){
    snow[i].display();
    snow[i].updateY();
}

  drawSprites();
}
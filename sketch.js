const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight = 200;
function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;
  //body
  ground = new Ground(240,690,500,20);
  //Create Divisions

  for(var k=0;k <= width;k=k+80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }

//create Plinkos

  for(var j=40;j <=width; j=j+50){
    plinko.push(new Plinko(j,75,8));
  }

  for(var j=15;j <=width-10; j=j+50){
    plinko.push(new Plinko(j,175,8));
  }

  for(var j=40; j<=width; j=j+50){
    plinko.push(new Plinko(j,275,8));
  }

  for(var j=15;j <=width-10; j=j+50){
    plinko.push(new Plinko(j,375,8));
  }

  //create Particles
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),8,8));
  }
  Engine.run(engine);
}

function draw() {
  background(0); 
  rectMode(CENTER); 
  
  Engine.update(engine);
  // Display the Bodies
  for(var j=0; j < divisions.length; j++){
    divisions[j].display();
      }

  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
  }
  for(var j = 0; j < particles.length;j++){
    particles[j].display();
  }
   ground.display();

}
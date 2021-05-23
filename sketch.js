const Engine = Matter.js
const World = Matter.js
const Bodies = Matter.js
const Body = Matter.js

var divisions = [];
var divisionHeight = 300 ;
var particles = [];
var plinkos = [];

function preload(){


}





function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;

ground = new Ground(400,600,800,20)

  
}

 for (var i=0 ; i<=width;i=i+80){
   divisions.push(new Divisions(i,height-divisionsHeight/2,10,divisionsHeight))
 }

 for(var js=75;j<width+10;j=j+50){
  plinkos .push(new plinko(j,175))
 }

 for(var js=75;j<width+10;j=j+50){
  plinkos .push(new plinko(j,275))
 }

 for(var js=75;j<width+10;j=j+50){
  plinkos .push(new plinko(j,375))
 }

 Engine.run(angle);


function draw() {
 rectMode(CENTER)
  background(255,255,255);  
  
  drawSprites();


for(var n=0; n<divisions.length;n++){
  divisions[n].display();

}

if (frameCount===0){
  particles.push(newParticle(random(width/2-30,width/2+30),10,10))
}

for(var h= 0; h<particles.length;h++){
  particles[h].display();
}

for(var j=0; j<plinkos.length;j++){
  plinkos[j].display();
}

ground.display();







}


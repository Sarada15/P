const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function preload () {

}


function setup () {
  createCanvas(480, 800);
    engine = Engine.create();
    world = engine.world;

    //create Bodies here.
      ground = new Ground(240,798,480,30);

      for (var k = 0; k <= width; k = k + 80) {
        divisions.push(new Divisons(k, height-divisionHeight/2, 10, divisionHeight));
      }   

      for (var j = 40; j <= width; j = j + 50) {
        plinkos.push(new Plinko(j,75));
      }

    Engine.run(engine);
}


function draw () {  
  rectMode(CENTER);  
    
   background(0,0,0);  
   Engine.update(engine);

     
    //display objects here
    ground.display();
    
    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }

    for (var j = 40; j <= width; j = j + 50) {
      plinkos[j].display();
    }

    //console.log(divisions);    
   

  drawSprites();
}


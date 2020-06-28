const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player;
var backgroundImg ,platform;

function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    player=new Player(600,200,10,10);
    platform=new Ground(600,400,1200,10);

}


function draw(){
    background(0);
    Engine.update(engine);
    platform.display();
    player.display();

    if (keyIsPressed === true){
        player.velocityX=-58;
        player.velocityY=0;
    }
  

}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImage;
var dustbinImage;
var side1;
var dustbin1;

function preload() {

    
    

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    dustbin1 =new Dustbin(800,370,200,200)

    

  

 
	

	


    
   
    
    

    

    bird = new Bird(100,100);

}

function draw(){
    background("grey");

    Engine.update(engine);
    bird.display();
    ground.display();
    dustbin1.display();
    
   

    
    
   

    

    
    drawSprites();
}
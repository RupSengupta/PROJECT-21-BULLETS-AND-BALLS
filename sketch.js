
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var side1, side2, side3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 

 side1=createSprite(width/1.8,height-28,200,20);
	side1.shapeColor="white";

	side2=createSprite(width/2.3,height-78,20,100);
	side2.shapeColor="white";

	side3=createSprite(width/1.48,height-78,20,100);
	side3.shapeColor="white";

	side1 =Bodies.rectangle(width/2,height-40,200,20,{isStatic:true});
	 World.add(world,side1);

	 side2 =Bodies.rectangle(width/2,height-15,20,100,{isStatic:true});
	 World.add(world,side2);

	 side3 =Bodies.rectangle(width/3,height-20,20,100,{isStatic:true});
	 World.add(world,side3);

	


	paper=new Paper(110,660,40,40);
	ground =new Ground(110,690,1400,20);



	Engine.update(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paper.display();
  ground.display();

  drawSprites();
 
}








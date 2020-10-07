var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1;
var side2;
var side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 200, 20,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	//packageSprite.visible=false;

	side1=createSprite(width/2,height-45,200,20);
	side1.shapeColor="red";

	side2=createSprite(width/2.7,height-80,20,100);
	side2.shapeColor="red";

	side3=createSprite(width/1.6,height-80,20,100);
	side3.shapeColor="red";

	

	

	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 side1 =Bodies.rectangle(width/2,height-40,200,20,{isStatic:true});
	 World.add(world,side1);

	 side2 =Bodies.rectangle(width/2,height-15,20,100,{isStatic:true});
	 World.add(world,side2);

	 side3 =Bodies.rectangle(width/3,height-20,20,100,{isStatic:true});
	 World.add(world,side3);

	
	Engine.run(engine);
  
}


function draw() {
	background("black");
  rectMode(CENTER);
  Engine.update(engine);
  
 
  
 


 
  
  
  keyPressed1();
  drawSprites();
 
}

function keyPressed1() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	//packageSprite.visible=true;


	

	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y;
	
	

	
	

	
	
	
	
	
	
	
	

	
	


	

	

	
	
	
	
  }
}




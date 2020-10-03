var wall, thickness;

var bullet, speed, weight;

var deformation;

function setup() {
  createCanvas(1600,800);
  bullet =createSprite(50, 200, 50, 50);

  wall =createSprite(1200, 200, thickness, height/2);

  speed=random(223,321)
  weight=random(30,52)
  thickness =random(22, 83);

  bullet.velocityX =speed;
}

function draw() {
  background("black");



if(hasCollided(bullet, wall))
{
 bullet.velocityX=0;
 var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);


 if(damage>10)
 {
   wall.shapeColor="red";
 }


 if(damage<10)
 {
   wall.shapeColor="green";
 }

}

  drawSprites();
}


function hasCollided(bullet, wall) {


  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {

    return true;
  } else
  return false;




}








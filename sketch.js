var groundObj,paperObj,bin1;//bin2,bin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
groundObj = new Ground(width/2,670,width,20);
paperObj = new Paper(200,450,30)
bin1 = new Bin(1200,570,200,300);
//bin2 = new Bin(1000,600,20,80);
//bin3 = new Bin(800,600,20,80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  groundObj.display();
  paperObj.display();
  bin1.display();
  //bin2.display();
  //bin3.display();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(paperObj.paperBody,paperObj.paperBody.position,{x:60,y:-60})
	}
}



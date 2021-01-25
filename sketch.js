
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roofObject;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1 = new bob (200,450,35);
bobObject2 = new bob (270,450,35);
bobObject3 = new bob (340,450,35);
bobObject4 = new bob (410,450,35);
bobObject5 = new bob (480,450,35);

rope1 = new rope(bobObject1.body,roofObject.body,-bob1Diameter*2,0);
rope2 = new rope(bobObject2.body,roofObject.body,-bob1Diameter*1,0);
rope3 = new rope(bobObject3.body,roofObject.body,0,0);
rope4 = new rope(bobObject4.body,roofObject.body,bob1Diameter*1,0);
rope5 = new rope(bobObject5.body,roofObject.body,bob1Diameter*2,0);
roofObject = new roof(width/2,height/4,width/7,20);

bobDiameter = 40;
startBobPositionY= height/4+500;
bobObject1= new bob (startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
bobObject2= new bob (startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
bobObject3= new bob (startBobPositionX-bobDiameter,bobDiameter);
bobObject4= new bob (startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
bobObject5= new bob (startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(225);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
rope1.display();
  roof1.display();
 
}




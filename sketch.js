
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin, paper,ground;	
var engine,world;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin=new Dustbin(1200,650);
	paper=new Paper(200,450,100);
	ground=new Ground(width/2,670,width,20);

	Engine.run(engine);
}

function draw() {
  background("blue");
 
  dustbin.display();
  paper.display();
  ground.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  	}
}

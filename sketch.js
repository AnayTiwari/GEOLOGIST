const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var stone,hammer,iron,ground


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
  ground = new Ground(600,10,1200,20)
  stone = new Stone(700,300,100,100)
  hammer = new Hammer(10,10)
  iron = new Iron(300,350)
}


function draw() {
  
  background(0);
 
	

	//Create the Bodies Here.

  
  Engine.update(engine)
  ground.display()
  iron.display();
  hammer.display();
  stone.display();
}




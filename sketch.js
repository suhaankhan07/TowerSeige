const Engine = Matter.Engine;
const World= Matter.World;  
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;


function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
  world = engine.world;

  

  //level 1
  block1 = new Block(400,100,30,30);
  
  //level 2
  block2 = new Block(370,130,30,30);
  block3 = new Block(400,130,30,30);
  block4 = new Block(430,130,30,30);
  
  //level 3
  block5 = new Block(340,160,30,30);
  block6 = new Block(370,160,30,30);
  block7 = new Block(400,160,30,30);
  block8 = new Block(430,160,30,30);
  block9 = new Block(460,160,30,30);

  //level 4
  block10 = new Block(310,190,30,30);
  block11 = new Block(340,190,30,30);
  block12 = new Block(370,190,30,30);
  block13 = new Block(400,190,30,30);
  block14 = new Block(430,190,30,30);
  block15 = new Block(460,190,30,30);
  block16 = new Block(490,190,30,30);

  //new blocks
  
  //level1
  block17 = new Block(800,50,30,30);

  //level2
  block18 = new Block(770,80,30,30);
  block19 = new Block(800,80,30,30);
  block20 = new Block(830,80,30,30);

  //leve3
  block21 = new Block(740,110,30,30);
  block22 = new Block(770,110,30,30);
  block23 = new Block(800,110,30,30);
  block24 = new Block(830,110,30,30);
  block25 = new Block(860,110,30,30);



  ground1 = new Ground(400,560,250,20)
  ground2 = new Ground(800,200,180,20)

  ball = new Ball(100,400,20);

  slingshot = new SlingShot(ball.body,{x:139,y:420});

}





function draw() {
  background(0,0,0);  
  Engine.update(engine);
 


 block1.display();

 block2.display();
 block3.display();
 block4.display();

 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();

 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();

 //new level
 block17.display();
 
 block18.display();
 block19.display();
 block20.display();

 block21.display();
 block22.display();
 block23.display();
 block24.display();
 block25.display();

 ground1.display();
 ground2.display();

 ball.display();

 slingshot.display();

  drawSprites();
}

function mouseDragged() {
 Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingshot.fly();
}
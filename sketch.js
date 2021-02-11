const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //ground for support
  ground = new gwall (400,790,800,30);

  //left wall
  wall1 = new gwall (10,400,30,800);
  //middle wall
  wall2 = new gwall (400,600,30,600);
  //right wall
  wall3 = new gwall (790,400,30,800);
  //upper wall
  wall4 = new gwall (400,10,800,30);

  //blocks to transfer
  block1 = new blocks(96,408)
  block2 = new blocks(25,605)
  block3 = new blocks(62,481)
  block4 = new blocks(163,304)
  block5 = new blocks(354,719)
  block6 = new blocks(168,430)
  block7 = new blocks(39,595)
  block8 = new blocks(175,721)
  block9 = new blocks(320,553)

  block10 = new blocks(91,727)
  block11 = new blocks(240,400)
  block12 = new blocks(11,492)
  block13 = new blocks(248,406)
  block14 = new blocks(229,383)
  block15 = new blocks(259,595)
  block16 = new blocks(333,612)
  block17 = new blocks(210,428)
  block18 = new blocks(79,304)
  block19 = new blocks(201,589)
  block20 = new blocks(322,303)

  player = new ball (mouseX,mouseY,20);
  
}

function draw() {
  background(0);  
  Engine.update (engine);

  ground.display();

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();

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
  block17.display();
  block18.display();
  block19.display();
  block20.display();

  player.display();
  //player.x = mouseX
  //player.y = mouseY

  textSize(20)
  fill ("pink");
  text("With the mouse move the blocks from the left side to the right",150,50);

}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20,box21,box22,box23;
var ground,ground1;
var polygon;
var slingshot



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(390,262,200,10);
  ground1 = new Ground(600,200,200,10)
  //level1
  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);
  //level2
  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);
  //level three
  box9 = new Box(375,152,30,40);
  box10 = new Box(408,152,30,40);
  box11 = new Box(390,110,30,40);
  box12 = new Box(540,174,30,40);

  box13 = new Box(570,174,30,40);
  box14 = new Box(600,174,30,40);
  box15 = new Box(630,174,30,40);
  box16 = new Box(660,174,30,40);
  box17 = new Box(570,131,30,40);
  box18 = new Box(600,131,30,40);
  box19 = new Box(630,131,30,40);
  box20 = new Box(585,101,30,40);
  box21 = new Box(615,101,30,40);
  box22 = new Box(600,53,30,40);
  polygon = new Polygon(500,500,20);
  sling = new Slingshot(polygon.body,{x:200,y:200});
}

function draw() {
  background("white");  
  Engine.update(engine);

  ground.display();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  polygon.display();
  sling.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
 sling.fly();
}
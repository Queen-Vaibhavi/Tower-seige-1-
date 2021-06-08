const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  me = loadImage("WIN_20210607_16_53_39_Pro-removebg-preview.png"); 
  polygon_img=loadImage("polygon.png");
  bgImage = loadImage("childrens-park-in-themiraflores-district-of-lima-peru-DC2B0D.jpg");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

//stand2 level1

fill("blue");
block17 = new Block(650,100,45,40);
block18 = new Block(700,100,35,40);
block19 = new Block(750,100,60,40);

block20 = new Block(700,50,30,40);
block21 = new Block(730,50,30,40);
blockS = new Block(660,50,30,40);

block22 = new Block(700,0,30,40);

  
//creating polygon
polygon1 = new Polygon(200,200,18);

//creating slingshot
sling = new slingshot(polygon1.body,{x: 90,y: 170});
}
function draw() {
  background(bgImage);  
  //textSize(20);
  fill("lightyellow");
  textSize(25);
  text("enjoy hitting samosas!!",50 ,50);
  
  image(me ,-205,90,400,350);


  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  //stand2
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  blockS.display();

  polygon1.display();
  sling.display();
    
}//function draw bracket

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x: mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, freind1;
var backgroundImg;
var myself, slingShot;

function preload() {
   backgroundImg = loadImage("sprites/school.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,380,1500,20);
   

    box1 = new Box(695,320,80,80);
    box2 = new Box(920,320,80,80);
    log1 = new Log(820,315,390,PI/2);
    angryman = new Bird(200,50);
    freind1 = new Freind1(810,310);
    freind2 = new Freind1(700,305);
    freind3 = new Freind3(900,310);
    freind4 = new Freind(810,120);
    stick = new Stick(810,295,20,140);
    stick1 = new Stick(780,295,20,140);
    stick2 = new Stick(840,295,20,140);
    stick3 = new Stick(820,295,20,140);
    stick4 = new Stick(700,295,20,140);
    stick5 = new Stick(920,295,20,140);
    stick6 = new Stick(940,295,20,140);
    slingshot = new SlingShot(angryman.body,{x:200, y:220});
    log2 = new Log(810,155,360,PI/2);
    box3=new Box(700,50,80,80);
    box4=new Box(920,50,80,80);
}

function draw(){
  
        background(backgroundImg);
       
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    log1.display();
    freind1.display();
    freind2.display();
    freind3.display();
    freind4.display();
    angryman.display();
    slingshot.display();
    stick.display();
    stick1.display();
    stick2.display();
    stick3.display();
    stick4.display();
    stick5.display();
    stick6.display();
    log2.display();
}
function mouseDragged(){
  
        Matter.Body.setPosition(angryman.body, {x: mouseX , y: mouseY});
    }



function mouseReleased(){
    slingshot.fly();
   
}


const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower,blowe
var blowerMouth;
var button;

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower4 = new Blower(width / 2 - 40, height / 2 + -15, 120, 10);
  blower3 = new Blower(width / 2 - 230, height / 2 + 20, 50, 90);
  blower2 = new Blower(width / 2 - 50, height / 2 + 200, 600, 15);
  blower = new Blower(width / 2 - 50, height / 2 + 55, 300, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createButton("PUSH to FLOAT");
  button.position(width / 2, height - 100);
  button.class("blowButton");

  button.mousePressed(blow);


}

function draw() {
  
  createEdgeSprites

  background(59);
  Engine.update(engine);

  blower4.show();
  blower3.show();
  blower2.show();
  blower.show();
  ball.show();
  blowerMouth.show();
}

if (ball.isTouching(leftEdge, rightEdge) )
 ball.delete()

if (ball.isTouching(blower2) )
  ball.delete()

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  

}


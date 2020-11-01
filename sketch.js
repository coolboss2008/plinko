const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var division = [];
var plinko1 = [], plinko2 = [], plinko3 = [], plinko4 = [];
var particle;

var gameState = "play";

var score = 0;
var count = 0;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //creating divisions
  for(var i=0; i<=480; i=i+80)
  {
    division.push (new Division(i, 610, 10, 380));
  }

  //plinko first line
  for(var j =40; j<=width; j=j+50)
  {
    plinko1.push(new Plinko(j, 50));
  }

  //plinko second line
  for(var j = 15; j<=width-10; j=j+50)
  {
    plinko2.push(new Plinko(j, 150));
  }

  //plinko third line
  for(var j =40; j<=width; j=j+50)
  {
    plinko3.push(new Plinko(j, 250));
  }

  //plinko fourth line
  for(var j = 15; j<=width-10; j=j+50)
  {
    plinko4.push(new Plinko(j, 350));
  }

  //creating ground
  ground = new Ground(240, 790, 480, 20);
}

function draw() {
  background(0);  

  Engine.update(engine);
  
   //creating particles after every 60 frames
    /* if(frameCount%60 === 0)
   {
     particle.push(new Particle(random(100, 380),random(0, 10)));
   } */

   //yellow line
  stroke("yellow");
  strokeWeight(8);
  line(0, 395, 480, 395);

  //displaying scores in each division
  textSize(25);
  noStroke();
  fill("white")
  text(500, 20, 500);
  text(300, 100, 500);
  text(100, 180, 500);
  text(100, 260, 500);
  text(300, 340, 500);
  text(500, 420, 500);

  //displaying plinko1
  for(var y=0; y<plinko1.length; y++)
  {
    plinko1[y].display();
  }

  //displaying plinko2
  for(var y=0; y<plinko2.length; y++)
  {
    plinko2[y].display();
  }

  //displaying plinko3
  for(var y=0; y<plinko3.length; y++)
  {
    plinko3[y].display();
  }

  //displaying plinko4
  for(var y=0; y<plinko4.length; y++)
  {
    plinko4[y].display();
  }

  //displaying ground
  ground.display();

   //displaying divisions
   for(var x=0; x<division.length; x=x+1)
   {
     division[x].display();
   }


   particle = new Particle(mouseX, 10);

   particle.display();

// Also why is my ball not falling down? i meant particle.

 /*   if(particle != null) 
    { 
      particle.display();
     //to calculate score
      if(particle.body.position.y>395)
      {
        if(particle.body.position.x<80  &&  particle.body.position.x>400)
        {
          score = score+500;
          particle = null;
        }
        else if(particle.body.position.x>80  && particle.body.position.x<160 && particle.body.position.x>320 && particle.body.position.x<400)
        {
          score = score+300;
          particle = null;
        }
        else if(particle.body.position.x>160  &&  particle.body.position.x<320)
        {
          score = score+100;
          particle = null;
        }
      }
    if(count === 5)
    {
      gameState === "end";
    }
  }*/


 // drawSprites();

}

function mousePressed()
{
  console.log("Mouse event")
  if(gameState !=="end")
  {
    console.log("success 162");
    count++;
    //particle = new Particle(mouseX,10);
  }
}
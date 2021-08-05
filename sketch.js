var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var particle;
var score = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  //create division objects
  for (var k = 0; k <= 800; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  //create 3rd row of plinko objects

  for (var j = 25; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  //create 4th row of plinko objects

  for (var j = 0; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }

}



function draw() {
  background("black");
  textSize(20)

  text("score: " + score, 50, 50);
  text("500", 20, 500);
  text("500", 105, 500);
  text("500", 185, 500);
  text("500", 265, 500);
  text("100", 345, 500);
  text("100", 420, 500);
  text("100", 500, 500);
  text("300", 585, 500);
  text("300", 665, 500);
  text("300", 745, 500);

  if (particle != null) {
    particle.display();
    if (particle.body.position.y > 700) {
      if (particle.body.position.x < 265) {
        score = score + 500;
        particle = null;
      }
      else if (particle.body.position.x < 500 && particle.body.position.x > 265) {
        score = score + 100
        particle = null;
      }
      else if (particle.body.position.x < 745 && particle.body.position.x > 500) {
        score = score + 300
        particle = null;
      }
    }
  }

  Engine.update(engine);
  ground.display();

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create the particles using frameCount

  if (frameCount % 60 === 0) {
    particles.push(new Particles(random(width / 2 - 30, width / 2 + 30), 10, 10));
  }

  //display the particles 

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
}
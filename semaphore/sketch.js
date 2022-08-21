
let n;
let particles = [n]
let myFont;

function preload() {
  regular = loadFont('./semaphore.otf');
}

function setup() {
  createCanvas(850, 1100, SVG);
  textFont(regular, 24);
  n = 1000;
  noFill();
  for (let i = 0; i < n; i++) {
    //x value start slightly outside the right of canvas, z value how close to viewer
    var loc = createVector(random(width), random(height));
    var angle = noise(i, i)// map(noise(i, i), 0, 1, 0, 2* PI) //any value to initialize
    // var speed = random(5,map(mouseX,0,width,5,20));   // faster
    particles[i] = new Particle(loc, angle);
  }

}

function draw() {
  background(200);
  for(let i = 0; i < n; i++) {
    particles[i].show();
  }
    
  noLoop();
}

class Particle {
  constructor(loc, angle) {
    this.loc = loc 
    this.angle = angle
    this.radius = 5
  }

  show() {
    push()
    stroke(255, 0, 0)
    rotate(this.angle)
    line(this.loc.x, this.loc.y, this.loc.x+10, this.loc.y + 10)
    pop()
    fill(0);
    if (this.angle < PI/6)
      text("R", this.loc.x, this.loc.y);
    else if (this.angle < PI/4)
      text("B", this.loc.x, this.loc.y);
    else 
      text("C", this.loc.x, this.loc.y);

    // ellipse(this.loc.x, this.loc.y, this.radius)
    stroke(0);
    pop()

  }

}
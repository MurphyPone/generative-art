let rings;
let dim_init;
let dim_delt;

let chaos_init;
let chaos_delta;
let chaos_mag;

let ox;
let oy;
let oz;

function setup() {
  createCanvas(800, 800, SVG);

  rings = 50;
  dim_init = 50;
  dim_delta = 4;

  chaos_init = .2;
  chaos_delta = 0.12;
  chaos_mag = 20;

  ox = random(10000);
  oy = random(10000);
  oz = random(10000);

  strokeWeight(1);
  stroke(0);
  smooth();
  noFill();
  // noLoop();
}

function draw() {
  clear();
  translate(width / 2, height / 2);
  display();
}


function display(){
  ox += 0.04;
  oy -= 0.02;
  oz += 0.01;
  for(let i = 0; i < rings; i ++){
    beginShape();
    for(let angle = 0; angle < 360; angle++){
      let radian = radians(angle);
      let radius = (chaos_mag * getNoiseWithTime(radian, chaos_delta * i + chaos_init, oz)) + (dim_delta * i + dim_init);
      vertex(radius * cos(radian), radius * sin(radian));
    }
    endShape(CLOSE);
  }
}

function getNoise (radian, dim){
  let r = radian % TWO_PI;
  if(r < 0.0){r += TWO_PI;}
  return noise(ox + cos(r) * dim, oy + sin(r) * dim);
}

function getNoiseWithTime (radian, dim, time){
  let r = radian % TWO_PI;
  if(r < 0.0){r += TWO_PI;}
  return noise(ox + cos(r) * dim , oy + sin(r) * dim, oz + time);
}
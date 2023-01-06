let step = 4;
let dashMax = 25

function setup() {
  createCanvas(800, 1100, SVG);
  noFill()
}

function f1(x) {
  return -(pow(x, 3) / (width * step*4.5)) + height/2;
  // return -tan(x/1000)
}

function f2(x) {
  return -(pow(x, 3) / (width * 42.5)) + height/2;
}

function draw() {
  strokeWeight(1);
  stroke(0);
  for(let x = step; x < (width - step)/step; x++) {
    setLineDash([random(dashMax), random(dashMax), random(dashMax), random(dashMax), random(dashMax)]);
    line(x * step, step, x * step, f1(x));
  }

  push();
  translate(width, height);
  rotate(PI);
  for(let x = step/2; x < (width - step)/step; x++) {
    setLineDash([random(dashMax), random(dashMax), random(dashMax), random(dashMax), random(dashMax)]);
    line(x * step, step, x * step, f1(x));
  }
  pop()

  noLoop();
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}


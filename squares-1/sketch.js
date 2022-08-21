let size = 20;
let step = 2;

function setup() {
  createCanvas(500, 500, SVG);
}

function draw() {
  background(200);
  rectMode(CENTER);
  noFill();
  let i = 0
  for (let x = 0; x < (width / (size + step)) - 1 ; x ++) {
    for (let y = 0; y < (height / ( size + step)) - 1; y ++) {
      i++;
      push();
      translate(x * (step + size) + size, y * (step + size) + size);
      let r = map(x, 0, width / (size + step)-2, 0, PI/2)
      rotate(r*y);
      rect(0, 0, size, size);
      pop();
    }
  }

  noLoop();

}
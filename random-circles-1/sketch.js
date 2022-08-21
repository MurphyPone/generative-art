
let n;

function setup() {
  createCanvas(800, 800);
  n = 1000;
}

function draw() {
  background(200);
  stroke(0)
  for (let i = 0; i < n; i++) {
    let x = random() * width
    let y = random() * height

    let r = random();
    if (r < 0.25){
      fill(255, 0, 0);
    } else if (r < 0.50) {
      fill(255, 200, 0);
    } else if (r < 0.75) {
      fill(100, 100, 255);
    } else {
      noFill();
      ellipse(x, y, random() * 20);
      // erase();
      // ellipse(x + random()*2, y+ random() * 2, random() * 30);
      // noErase();
    }
    
    ellipse(x, y, r * 40);
  }
    
  noLoop();
}
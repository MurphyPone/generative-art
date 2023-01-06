let step = 7;
let len = 25;
let n = 70;

function setup() {
  createCanvas(800, 1100, SVG);
}

function drawTriangle(x, y, length) {
  let ax = x 
  let ay = y 
  let bx = x + length  
  let by = y  
  let cx = x + length / 2 
  let cy = y - length * (sqrt(3)/2)  
  stroke(255, 0, 0);
  line(ax, ay, bx, by) // bottom 
  stroke(0, 255, 0);
  line(ax, ay, cx, cy) // left
  stroke(0, 0, 255);
  line(bx, by, cx, cy) // right
}

function drawQuad(x, y, length) {
  let ax = x 
  let ay = y 
  let bx = x + length  
  let by = y + length 
  let cx = x + length
  let cy = y - length 
  let dx = cx + length
  let dy = cy + length
  stroke(255, 0, 0);
  line(ax, ay, bx, by) // bottom 
  stroke(0, 255, 0);
  line(ax, ay, cx, cy) // left
  stroke(0, 0, 255);
  line(bx, by, dx, dy) // right
  stroke(255, 255, 0);
  line(cx, cy, dx, dy) // bottom 
}

function draw() {
  // background(100)
  // drawTriangle(width/2, height/2, 50);
  for(let y = 0; y < 2 * n; y++) {
    // translate(width/2, height/3 + y/100)
    push()
    translate(3 * width/4, len + (y * step), len);
    rotate(PI/60 * y);
    drawTriangle(0, y, len);
    pop();
  }

  // for(let y = 0; y < 2 * n-10; y++) {
  //   // translate(width/2, height/3 + y/100)
  //   push()
  //   translate(width/4, len + (y * step), len);
  //   rotate(PI/60 * y);
  //   drawQuad(0, y, len);
  //   pop();
  // }
  noLoop();
  save("tricolor.svg")
}

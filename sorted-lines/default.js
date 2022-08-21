let startX;
let startY1;
let endY1;

let startY2;
let endY2;

let segments;
let n;
let step;

// class segment

class Segment {
  constructor(x1, y1, x2, y2, c) {

    // y1 is top of top, y2 is top of botom
    // top line
    this.x1 = x1;
    this.y1 = y1;

    this.x2 = x2;
    this.y2 = y2;
  
    this.c = color(0, 100, 200);
    if (c == 0) this.c = color(255,0, 0);
    if (c == 1) this.c = color(0, 255, 0);
    if (c == 2) this.c = color(0, 0, 255);
  }

  display() {
    noFill();
    stroke(this.c);
    line(map(this.x1, startX, 414, 0, width), 0, this.x1, this.y1);

    let y2 = this.y1 + 200
    line(this.x1, this.y1, this.x1, y2);
    curve(random(width * 2), height/ 2 - random(height/2), this.x1, y2, this.x2, this.y2, random(width), height/ 2 + random(height/2));
    // line(this.x1, y2, this.x2, this.y2); // wobble this one
    line(this.x2, this.y2, this.x2, this.y2 + 200);
    line(this.x2, this.y2 + 200, map(this.x2, startX, 414, 0, width), height);
  }

}

function setup() {
  createCanvas(600, 800, SVG);

  n = 60;
  step = 4;

  startX = (width / 2) - (step * (n + 1) / 2);
  
  startY1 = height / 10;
  endY1 = height / 2 - height / 10;

  startY2 = height / 2 + height / 10;
  endY2 = height - height / 10;

  segments = [];
  let topXs = [];

  for (let i = 0; i < n; i ++) {
    topXs.push(startX + i * step);
  }
  print(topXs[59]);

  let bottomXs = shuffle(topXs, false); // shuffle in place

  for (let i = 0; i < n; i ++) {

    let c;
    if (i < 20) c = 0;
    else if (i < 40) c = 1;
    else c = 2;

    segments.push(
      new Segment(
        topXs[i], startY1,
        bottomXs[i], startY2,
        c
    ));
  }
  
}

function draw() {
  for (let i = 0; i < n; i++) {
    segments[i].display();
  }
    

  save("sorted lines.svg"); // give file name
  // print("saved svg");
  noLoop(); // we just want to export once
}

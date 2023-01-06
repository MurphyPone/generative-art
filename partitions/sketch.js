let xdim = 10;
let ydim = 8;
let size = 20;

let grid;
let colors;

function setup() {
  createCanvas(1200,850, SVG);
  noLoop();
  noFill();

  colors = [
    color(231,94,96),
    color(249,190,82),
    color(89,180,180),
    color(197,149,197)
  ];
}

function draw() {
  clear();
  translate(-size/2, -size/2);
  generate_grid(xdim, ydim);
  for (var i = 0; i < 7; i++) {
    push();
    for (var j = 0; j < 9; j++) {
      strokeWeight(6);
      stroke(colors[floor(random(4))]);
      //fill(colors[floor(random(4))]);
      display(min(j,4), min(i,3), 3 + myDist(4,j) , 3 + myDist(3,i));
      strokeWeight(1);
      // stroke(20,39,49);
      noFill();
      display(min(j,4), min(i,3), 3 + myDist(4,j) , 3 + myDist(3,i));

      translate(90 + (myDist(4,j)  * size), 0);
    }
    pop();
    translate(0, 90 + (myDist(3,i)  * size));
  }
  noLoop();
  save("partitions.svg")
}

function generate_grid(xd,yd) {
  grid = new Array(yd + 1);
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(xd + 1);
    for (var j = 0; j < grid[i].length; j++) {
      if (i == 0 || j == 0) grid[i][j] = {h:false, v:false};
      else if (i == 1 && j == 1) grid[i][j] = {h:true, v:true};
      else grid[i][j] = generate_cell(grid[i][j-1].h, grid[i-1][j].v);
    }
  }
}

function generate_cell(west,north) {
  if (!west && !north) return {h:false, v:false}
  if (!west) return {h:flip_coin(), v:true}
  if (!north) return {h:true, v:flip_coin()}
  let h = flip_coin();
  let v = h ? flip_coin() : true;
  return {h:h, v:v};
}

function display(x1,y1, sx,sy) {
  rect(size,size, (sx-1) * size, (sy-1) * size);
  for (var i = 1; i < sy; i++) {
    for (var j = 1; j < sx; j++) {
      if(grid[y1 + i][x1 + j].h) line(j * size, i * size, (j+1) * size, i * size);
      if(grid[y1 + i][x1 + j].v) line(j * size, i * size, j * size, (i+1) * size);
    }
  }
}

function flip_coin() {
  return random() < .6 ? false:true
}

function myDist (n, m) {
  return max(n - m, m - n);
}

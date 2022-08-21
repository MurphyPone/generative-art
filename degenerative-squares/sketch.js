function drawQuad(x, y, size, colorQuad, distortX, distortY){
  
  //randomSeed(x);
  let marginX = random(distortX/5);
  let marginY = random(distortY/5);
  let points = {
  x1:random(x, x + marginX),
  y1:random(y, y + marginY),
  
  x2:random(x + size - marginX, x + size),
  y2:random(y, y + marginY),
  
  x4: random(x, x + marginX),
  y4: random(y + size - marginY, y+size),
  
  x3: random(x+size-marginX, x+size),
  y3: random(y+size-marginY, y+size)
};

 
  if(colorQuad){
    
    // r = random(distortX * 7); // r is a random number between 0 - 255
    // g = random(distortX * 2); // g is a random number betwen 100 - 200
    // b = random(distortX * 3); // b is a random number between 0 - 100
    // a = random(200,255); // a is a random number between 200 - 255
     let myColors = Array(
              Array(151, 249, 249), 
              Array(164, 222, 249), 
              Array(193, 224, 247), 
              Array(207, 286, 225),
              Array(197, 159, 201)
              // color(151,249,249), 
              // color(164, 222, 249), 
              // color(193, 224, 247), 
              // color(207, 286, 225),
              // color(197, 159, 201)
           );
    
    c = random(myColors) 
    print(c)
    noStroke();
   // colorMode(HSB, 360, 100, 100);
    fill(c[0], c[1], c[2]);
  }
  else{
    noFill();
    stroke(1);
  }
  
  quad(points.x1, points.y1, points.x2, points.y2, points.x3, points.y3, points.x4, points.y4); 
}

function setup() {
  
  createCanvas(2100, 2197, SVG);
  let size = 20;
  let spacing = 10;
  let yCoor = 0;
  let xCoor = 0;
  let grid =30;
  let xDisturb = 0;
  let yDisturb = 17;
  
  for(let i = 1; i < grid; i++){
    for(let k = 1; k < grid * 0.75; k++){
      
      drawQuad(xCoor, yCoor, size, true, xDisturb/yDisturb, xDisturb/yDisturb);
      drawQuad(xCoor, yCoor, size, false,xDisturb/yDisturb , xDisturb/yDisturb);
      xCoor += size + spacing;
      xDisturb = xCoor; //(k > grid/2)? (grid - k) : k;
    }
    yCoor += size + spacing;
    yDisturb -= 0.5;//(i > grid/2)? (grid - i) : i;
    xCoor = 0;
  }
}


function draw() {

  // save("squares.svg"); // give file name
  // print("saved svg");
  noLoop(); // we just want to export once
}

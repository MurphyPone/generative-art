// Original code by Craig S. Kaplan
// https://www.openprocessing.org/user/167697
// https://www.openprocessing.org/sketch/683686

let f = 0;
let a, b;

function setup() {
  createCanvas(a=600,b=400, SVG);
}


function draw() {
  clear();
  translate(width/2,-height/3);
  rotate(PI/4);
  clear();
	f++;
  stroke(0);
  fill(255);
  // noFill();
	stroke(0) 
	for(let y = 100; y < height; y += 5) {
		beginShape();
		for(x=0;x<a;++x) {
      if(noise(x,y) < 0.3) {
        stroke(255);
      }
      vertex(x, y-80/(1+pow(x-width/2,4)/8e6) * noise(x/30+f/50+y) * y/150);
      stroke(0);
      // if(noise(x,y) < 0.3) {
      //   stroke(255);//endShape();
      //   //beginShape();
      // }
      
    }
    vertex(x, 1e4);
		  
		endShape();
	}

  noFill()
  stroke(255, 0, 0);
  ellipse(width/2, height/2, height - height/4);
  // noLoop();
  // save("joy-division.svg"); // give file name
}
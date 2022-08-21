let size = 5;
let step = 5;

let stepSlider;
let noiseSlider;

function setup() {
  createCanvas(1000, 1000);
  // stepSlider = createSlider(1, 20, 5);
  noiseSlider = createSlider(0.01, 2, 0.25, 0.02);
  frameRate(3);
}

function draw() {
  clear();
  noFill();
  
  // translate(-width/4, height/2);
  // rotate(-PI/4);
  // step = stepSlider.value()
  let n_mult = noiseSlider.value()
  
  for (let x = 0; x < width / step ; x++) {
    // noiseSeed(random())
    beginShape();
    for (let y = 0; y < height / step; y++) {
      // ellipse(x * step, y * step, size, size);
      let n_val = noise(x, y) * 0.02 * n_mult * abs(x - width/2*2); // abs(x - width/2) / (n_mult * 10); // noise(x, y, 1) * (n_mult * abs(y - width/2)/50);
      curveVertex((x + n_val) * step, y * step);
      if (random() < 0.05) {
        endShape();
        beginShape();
      }
        
    }  
    endShape();

  stroke(255, 0, 0);
  ellipse(width/2, height/2, width - width/5, height - height/5)
  stroke(0);
    
  }
  
}
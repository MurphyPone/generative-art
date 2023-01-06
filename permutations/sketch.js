let color_palettes = [
  ["#D63826", "#FFCC00", "#79C3A7", "#00bbff", "#5500FF"],
  ["#D63826", "#0D809C", "#F5C03E", "#152A3B", "#79C3A7"],
  ["#0F4155", "#5399A1", "#8CA96B", "#CB5548", "#E7E6F5"],
  ["#E8614F", "#EBEBD6", "#F3F2DB", "#668065", "#4B3331"],
  ["#DBE5EC", "#336B87", "#2A3132", "#E94D35", "#EFAC55"],
  ["#cdd7db", "#5aacad", "#0e7e80", "#00bbff", "#EFAC55"],
];

let init;
let permutations;
let min_swaps;

let MIN_SWAP = [3, 4, 5];

let step;
let gap;

function setup() {
  createCanvas(800, 1500, SVG);

  init = [1, 2, 3, 4, 5];
  permutations = permutator(init);
  step = 10;
  gap = init.length * 4;
  min_swaps = init.length;
}

function draw() {
  // background(220);
  noFill();
  strokeWeight(2);

  // for each permutation
  for (let i = 0; i < permutations.length; i++) {
    // for (let i = 0; i < 3; i++) {
    let target = permutations[i];
    let segments = createSegments(init, target).reverse();
    console.log("init: ", init);
    console.log("target: ", target);
    console.log("segments: ", segments);

    // for each row in a permutation
    for (let s = 1; s < segments.length; s++) {
      let prev = segments[s - 1];
      let curr = segments[s];

      console.log("prev: ", prev);
      console.log("curr: ", curr);

      for (let c = 0; c < prev.length; c++) {
        stroke(color_palettes[1][init[c] - 1]);
        let w_pad;
        let x1 = prev[c] * step + (i % (2 * init.length)) * 3 * gap;
        let x2 = curr[c] * step + (i % (2 * init.length)) * 3 * gap;

        let h_pad =
          step + floor(i / (2 * init.length)) * (init.length - 1) * gap;
        let y1 = h_pad + gap * s + floor(i / (2 * init.length)) * gap;
        let y2 = h_pad + gap * (s + 1) + floor(i / (2 * init.length)) * gap;

        // line(x1, y1, x2, y2)
        console.log(x1, y1, x2, y2);
        bezier(x1, y1, x1, y1 + step, x2, y2 - step, x2, y2);
      }
    }
  }

  noLoop();
}

function keyPressed() {
  save("factorial-" + init.length + ".svg");
}

function createSegments(input, target) {
  let res = [[...input]];

  for (let i = 0; i < target.length; i++) {
    let curr = [...res[res.length - 1]]; // start state

    if (curr[i] != target[i]) {
      // make one swap
      target_i = target.indexOf(input[i]);

      [curr[i], curr[target_i]] = [curr[target_i], curr[i]];

      res.push(curr);
    }
  }

  // pad
  while (res.length < min_swaps) {
    res.push([...res[res.length - 1]]);
  }

  console.log("res increate: ", res);

  return res;
}

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

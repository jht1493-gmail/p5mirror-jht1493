let values = [];
let startSort = true;

function mergeSort(a) {
  // create copy of the array 
  const a_copy = a.slice()
  // asynchronous sort the copy
  mergeSortSlice(a_copy, 0, a_copy.length);
  return;
}

async function mergeSortSlice(a, start, end) {
  if (end - start <= 1)
    return;
  var mid = Math.round((end + start) / 2);
  // wait till divides are sort 
  await mergeSortSlice(a, start, mid);
  await mergeSortSlice(a, mid, end);
  // merge divides
  let i = start,
    j = mid;
  while (i < end && j < end) {
    if (a[i] > a[j]) {
      let t = a[j];
      a.splice(j, 1);
      a.splice(i, 0, t);
      j++;
    }
    i++;
    if (i == j) j++;
    // copy back the current state of the sorting
    values = a.slice();
    // slow down
    await sleep(100);
  }
  // restart
  if (start == 0 && end == a.length) {
    await sleep(2000);
    startSort = true;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setup() {
  createCanvas(500, 190);
  frameRate(60);
}

let numOfRects = 15;
let rectWidth;

function draw() {
  if (startSort) {
    startSort = false;
    
    rectWidth = floor(width / numOfRects);
    values = new Array(floor(width / rectWidth));
    for (let i = 0; i < values.length; i++) {
      values[i] = random(height);
    }
    mergeSort(values);
  }
  background(23);
  stroke(0);
  fill(255);
  for (let i = 0; i < values.length; i++) {
    rect(i * rectWidth, height - values[i], rectWidth, values[i]);
  }
}

// https://stackoverflow.com/questions/58434991/how-to-pause-during-merge-sort-to-visualize-js-p5js
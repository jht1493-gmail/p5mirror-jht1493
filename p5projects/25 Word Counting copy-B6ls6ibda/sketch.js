// Array of words
let words = [];

// Word count
let word_count = {};

function preload() {
  loadStrings('america.txt', count);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background('white');
  for (let word in word_count) {
    textSize(word_count[word] * 10);
    text(word, random(10, width - 10), random(10, height - 10));
  }
  noLoop();
}

function count(data) {
  // Go line by line
  for (let d of data) {
    // Turn each line into an array of words
    let line = splitTokens(d);
    // Add it to 1 big array
    words = words.concat(line);
  }

  // Clean up all the words
  for (let w in words) {
    let word = words[w];
    // Remove punctuation
    word = word.replace(/[\-_:;.,!?\(\)]/g, "");
    // Make it all lowercase
    word = word.toLowerCase();
    // Get rid of whitespace around the word
    word = word.trim();
    // If nothing is left, get rid of it
    if (word.length < 1) words.splice(w, 1);
    // Otherwise put cleaned up word back in array
    else words[w] = word;
  }

  // Index the words
  for (let word of words) {
    if (word in word_count) word_count[word]++;
    else word_count[word] = 1;
  }
  
}
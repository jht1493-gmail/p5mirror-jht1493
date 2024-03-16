// Array of words
let words = [];

// Word chain
let word_chain = {};

// Data read from loadString
let a_data;

// Current word
let w = '';

// New string
let str = '';

// Paragraph to display text
let a_para;

function preload() {
  loadStrings('virgin.txt', count);
}

function setup() {
  noCanvas();

  sketch_ui();
  show_pretty('a_data', a_data);
  show_pretty('words', words);
  show_pretty('word_chain', word_chain);

  a_para = createP();
  a_para.style('font-weight', 'bold');
}

function draw() {
  // Pick next word every half-second
  if (frameCount % 30 == 0) {
    // Add current word to new string
    str += w + ' ';
    // Display string in parapgraph element
    a_para.html(str);
    // Pick next word
    w = random(word_chain[w]);
  }

}

function count(data) {
  a_data = data;
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
    word = word.replace(/[-_:;.,!?\(\)]/g, "");
    // Make it all lowercase
    word = word.toLowerCase();
    // Get rid of whitespace around the word
    word = word.trim();
    // If nothing is left, get rid of it
    if (word.length < 1) words.splice(w, 1);
    // Otherwise put cleaned up word back in array
    else words[w] = word;
  }

  // Collect all possible next words for each word
  for (let w = 0; w < words.length - 1; w++) {
    let word = words[w];
    // Get the next word
    let next_word = words[w + 1];
    // If this word has already been indexed, 
    // add the next word to its list of possible next words
    if (word in word_chain) word_chain[word].push(next_word);
    // Otherwise, start a new list
    else word_chain[word] = [next_word];
  }

  // Wrap last word around to beginning if it doesn't exist already in word_chain
  let lastw = words[words.length - 1];
  if (!(lastw in word_chain)) word_chain[lastw] = words[0];

  // Print word count object
  // console.log(word_chain);
  
  // Start with a random word
  w = random(words);
}

// https://editor.p5js.org/icm4.0/sketches/gqA1THrae
// Mimi Yin
// NYU ITP
// Try mashing up 2 of the data sources.
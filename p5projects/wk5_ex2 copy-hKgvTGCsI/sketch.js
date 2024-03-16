let messages = [
  "CALL ME",
  "DEAR ME",
  "MY MY",
  "LOVE BOT",
  "CUTE KISS",
  "MY BEAR",
  "LOVE BUN",
  "U R CUTE",
  "LET'S KISS",
  "CRAZY 4 U",
  "SWEET PEA",
];

let index = 10;
let y = 10;
let x = 10;

function setup() {
  createCanvas(250, 500);
  textSize(16);
  textFont("Arial");
  textAlign(LEFT);
  background(255);
  frameRate(1);
  // for (let i = 0; i < messages.length; i++) {
  //   console.log('i',i,'messages' , messages[i])
  // }
  for (let i = messages.length-1; i >= 0; i--) {
    console.log('i',i,'messages' , messages[i])
  }
}

function draw() {}

function mousePressed() {
  console.log("index", index);
  console.log("messages.length", messages.length);
  console.log('messages[index]', messages[index])
  text(messages[index], x, y, 100, 50);
  y = y + 30;
  index = index - 1;
  if (index <= 0) {
    index = 11;
  }
}

//   if (index == messages.length) {
//     index = 0;
//   }

//

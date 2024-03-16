/* 
The example lets you train a knn algorithm to classify handposes on rock, paper and scissors. 

To start simply bring your hand into the view, wait till the model is loaded and start showing the webcam either rock paper or scissors. Click the button to add an example to the relevant class. 

The classification will start right away. 

Built with Handpose model and knn-classifier from ml5.js and p5.js 

Some styling is done in style.css using CSS

Created by Yining Shi & Andreas Refsgaard 2020
Updated by Tom-Lucas Säger 2021
*/

// We start by declaring and defining a few variables that will come in handy later. 
let video;
let predictions = [];
let examplesAdded = false;
let outputLabel = "";
let label;
let countRock = 0;
let countPaper = 0;
let countScissors = 0;
let warning = "";

//We initiate our knnClassfier which will help us with the classification process of our RPS-game.
const knnClassifier = ml5.KNNClassifier();

// The canvas is setup and the webcam started, then we start Handpose and create some UI-Buttons for each of our classes. 
// Assign a function to each button. 
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);

  const handpose = ml5.handpose(video, modelReady);
  handpose.on('predict', gotResults);
  video.hide();

  let rockButton = createButton("👊", 'rock');
  let paperButton = createButton("🖐", 'paper');
  let scissorsButton = createButton("✌️", 'scissors');
  rockButton.mousePressed(rockPressed);
  paperButton.mousePressed(paperPressed);
  scissorsButton.mousePressed(scissorsPressed);

  textAlign(CENTER)
  noStroke();
  fill(0, 255, 0);
}

function draw() {
  //We draw the canvas with our webcam image and also call the function that draws the keypoints for us, which we define later. 
  background(255)
  image(video, 0, 0, width, height);
  drawKeypoints();
  //We setup everything for our counter, so we could later log the number of samples for each class. 
  textSize(18);
  text('👊 : ' + countRock, 60, height - 10);
  text('🖐 : ' + countPaper, 170, height - 10);
  text('✌️ : ' + countScissors, 290, height - 10);

  textSize(120);
  text(outputLabel, width / 6, height / 2);
  if (examplesAdded) {
    classify();
  }
  textSize(32)
  text(warning, width/2, height/2);
}

function modelReady() {
  console.log("Model ready!");
}
// Once the results of Handpose are in we save them in our variable predictions
function gotResults(results) {
  predictions = results;
}
// If the button for a class is pressed this function calls the function addExample() and 
// gives the function the argument of which button was pressed. It also gets the number of examples from our classifier. 
function rockPressed() {
  addExample('rock')
  countRock = knnClassifier.getCountByLabel().rock;
}

function paperPressed() {
  addExample('paper')
  countPaper = knnClassifier.getCountByLabel().paper;
}

function scissorsPressed() {
  addExample('scissors')
  countScissors = knnClassifier.getCountByLabel().scissors;
}
//This function receives the label of which button was pressed and then adds an example to our classifier.
function addExample(label) {
  //First we check if the hand is present and we have prediction values.
  if(predictions.length > 0){
    warning = "";
  for (let i = 0; i < predictions.length; i += 1) {
    const landmarks = predictions[0].landmarks;
    //We then need to adjust these labels before we can fed them into our classifier. 
    //We therefore use the map() method, which takes out the x and y position of every element in our Array landmarks 
    //and writes them in our new array predictionArray.
    const predictionArray = landmarks.map(p => [p[0], p[1]]);
    //We add the example to our classifier using the array we just created and 
    //the label that was given into the function by our button. 
    knnClassifier.addExample(predictionArray, label);
  }
  //We set examplesAdded to true. So classify will be called in our draw-loop
  examplesAdded = true;
}
//If an example is added, but the hand is not in the frame we tell the user to bring their hand in frame
else{
  warning = "Pleas bring you hand in \n the frame and strke a pose."
}
}
// This function gets called in draw() and will called the first time, once we added at least one example to our classifier.
function classify() {
  if(predictions.length > 0){
  for (let i = 0; i < predictions.length; i += 1) {
    const landmarks = predictions[0].landmarks;
    // The input from handpose is adjusted the same way as in addExamples()
    const predictionArray = landmarks.map(p => [p[0], p[1]]);
    //The data is now used to classify which label a certain hand position has. 
    knnClassifier.classify(predictionArray, (err, result) => {
      label = result.label;
    });
    //If the label is rock print out the rock emoji and so on…
    if (label == "rock") {
      outputLabel = '👊';
    } else if (label == "scissors") {
      outputLabel = '✌️';
    } else if (label == "paper") {
      outputLabel = '🖐';
    }
}
  }
  //If no handpose is seen the label will be set to empty
  else{
    outputLabel = "";
  }
  }
//draw the keypoints of the handpose model
function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];
      ellipse(keypoint[0], keypoint[1], 10, 10);
    }
  }
}

// email from lolo

// https://editor.p5js.org/tlsaeger/sketches/xL2DrkcEb
// Rock-Paper-Scissor by tlsaege
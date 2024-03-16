// https://editor.p5js.org/moremoreismore/sketches/4BB64Mub-

//initiate vars
var vertexGroup = [];
var counter = 0;
var fr = 20;
var rotate_1 = 0;
var rotate_2 = 0;
var rotate_3 = Math.PI/180 *30;
var rotate_4 = Math.PI/180 *60;

function setup() {
  createCanvas(800, 800);
  sketch = loadImage('./8pkZtcg.jpg');
  //frame rate control
  frameRate(fr);
  background(255);
}

//To draw each line
function brush(vGroup){
  //for curves
  if (vGroup.length == 8) {
    beginShape();
    curveVertex(vGroup[0],vGroup[1]);
    curveVertex(vGroup[2],vGroup[3]);
    curveVertex(vGroup[4],vGroup[5]);
    curveVertex(vGroup[6],vGroup[7]);
    endShape();
  }
  //for straight lines
  else{
    beginShape();
    vertex(vGroup[0],vGroup[1]);
    vertex(vGroup[2],vGroup[3]);
    endShape();
  }

}

//test method
function drawAll(vGroup){
  for (let x = 0; x < vGroup.length; x++){
    brush(vGroup[x])
  }
}
//working draw function
function draw() {
  stroke(0);
  strokeWeight(1);
  noFill();
  //image(sketch,0,0,800,800);
  document.getElementById("x").innerHTML = "this is x:" + mouseX;
  document.getElementById("y").innerHTML = "this is y:" + mouseY;

  if(counter < vertexGroup.length){
    //draw!
    brush(vertexGroup[counter]);
    counter = counter + 1;
  }
  else if(counter < vertexGroup.length + 80){
    //wait
    drawMotion();
    counter = counter + 1;
  }
  else{
    //loop
    clear();
    counter = 0;
  }
}

//testing draw function
function drawMotion() {
  stroke(0);
  strokeWeight(1);
  noFill();
  background(255);
  image(sketch,0,0,800,800);
  var random_vertex = vertexGroup.slice(0);
  for (x = 50; x < 53; x++){
    random_vertex[x][4] = random_vertex[x][4] + sin(rotate_1);
    random_vertex[x][5] = random_vertex[x][5] + sin(rotate_1);
    random_vertex[x][6] = random_vertex[x][6] - 10*sin(rotate_2);
    random_vertex[x][7] = random_vertex[x][7] + 10*sin(rotate_2);
  }

  for (y = 53; y < 56; y++){
    random_vertex[y][4] = random_vertex[y][4] + sin(rotate_3);
    random_vertex[y][5] = random_vertex[y][5] + sin(rotate_3);
    random_vertex[y][6] = random_vertex[y][6] - 10*sin(rotate_4);
    random_vertex[y][7] = random_vertex[y][7] + 10*sin(rotate_4);
  }

  // document.getElementById("z").innerHTML = "this is gradient x:" + sin(rotate_1);
  // document.getElementById("k").innerHTML = "this is gradient y:" + random_vertex[50][7];

  //update data
  rotate_1 += Math.PI/180 *10;
  rotate_2 += Math.PI/180 *20;
  rotate_3 += Math.PI/180 *10;
  rotate_4 += Math.PI/180 *20;

  drawAll(random_vertex);
}


//data loading

vertexGroup[0] = [437,900,232,287,563,241,556,800];
//brush(vertexGroup[0]);

vertexGroup[1] = [504,281,556,236,607,388,556,800];
//brush(vertexGroup[1]);

vertexGroup[2] = [340,-84,599,366,615,629,380,730];
//brush(vertexGroup[2]);

vertexGroup[3] = [615,629,571,673];
//brush(vertexGroup[3]);

vertexGroup[4] = [216,776,571,673,588,466,520,380];
//brush(vertexGroup[4]);

vertexGroup[5] = [418,73,580,353,547,594,370,600];
//brush(vertexGroup[5]);

vertexGroup[6] = [680,501,547,594,496,665,530,750];
//brush(vertexGroup[6]);

vertexGroup[7] = [560,720,496,665,526,576,620,450];
//brush(vertexGroup[7]);

vertexGroup[8] = [-100,160,516,280,400,666,-580,550];
//brush(vertexGroup[8]);

vertexGroup[9] = [74,615,400,666,527,368,300,-400];
//brush(vertexGroup[9]);

vertexGroup[10] = [442,1,519,376,476,517,390,530];
//brush(vertexGroup[10]);

vertexGroup[11] = [541,417,527,471,476,517,420,530];
//brush(vertexGroup[11]);

vertexGroup[12] = [452,15,461,288,519,386,540,390];
//brush(vertexGroup[12]);

vertexGroup[13] = [417,146,461,288,426,362,408,360];
//brush(vertexGroup[13]);

vertexGroup[14] = [585,214,426,362,384,440,400,500];
//brush(vertexGroup[14]);

vertexGroup[15] = [428,102,325,331,388,444,580,430];
//brush(vertexGroup[15]);

vertexGroup[16] = [353,287,325,331,351,275,450,282];
//brush(vertexGroup[16]);

vertexGroup[17] = [303,202,328,314,247,388,192,377]; //face ends
//brush(vertexGroup[17]);

vertexGroup[18] = [474,95,257,375,251,487,335,492];
//brush(vertexGroup[18]);

vertexGroup[19] = [350,507,251,487,213,433,250,350];
//brush(vertexGroup[19]);

vertexGroup[20] = [318,184,214,404,222,476,236,500];
//brush(vertexGroup[20]);

vertexGroup[21] = [208,-45,213,439,228,580,220,608];
//brush(vertexGroup[21]);

vertexGroup[22] = [204,602,228,580,208,661,100,790];
//brush(vertexGroup[22]);

vertexGroup[23] = [83,709,208,661,251,566,210,500];
//brush(vertexGroup[23]);

vertexGroup[24] = [267,529,251,566,282,595,316,584];
//brush(vertexGroup[24]);

vertexGroup[25] = [286,353,251,529,289,604,327,605];//head bottom
//brush(vertexGroup[25]);

vertexGroup[26] = [140,335,210,487,159,596,80,570];
//brush(vertexGroup[26]);

vertexGroup[27] = [-40,730,159,596,194,477,120,368];
//brush(vertexGroup[27]);

vertexGroup[28] = [556,206,236,373,187,531,250,560];
//brush(vertexGroup[28]);

vertexGroup[29] = [425,810,187,531,236,296,340,240];
//brush(vertexGroup[29]);

vertexGroup[30] = [331,-78,232,287,137,379,88,235];
//brush(vertexGroup[30]);

vertexGroup[31] = [91,309,137,379,198,362,200,300];
//brush(vertexGroup[31]);

//face
vertexGroup[32] = [208,325,247,395,249,459,246,463];
//brush(vertexGroup[32]);

vertexGroup[33] = [310,369,249,459,228,501,240,535];
//brush(vertexGroup[33]);

vertexGroup[34] = [322,388,228,501,368,572,425,500];
//brush(vertexGroup[34]);

vertexGroup[35] = [495,504,368,572,531,518,550,380];
//brush(vertexGroup[35]);

vertexGroup[36] = [361,439,322,488,334,547,371,553];
//brush(vertexGroup[36]);

vertexGroup[37] = [184,608,322,488,427,488,353,615];
//brush(vertexGroup[37]);

vertexGroup[38] = [409,363,427,488,387,548,311,550];
//brush(vertexGroup[38]);

vertexGroup[39] = [409,363,427,488,387,548,311,550];
//brush(vertexGroup[39]);

vertexGroup[40] = [267,383,267,383,345,394,345,394];
//brush(vertexGroup[40]);

vertexGroup[41] = [268,385,268,385,340,399,340,399];
//brush(vertexGroup[41]);

vertexGroup[42] = [391,444,320,400,294,429,311,473];
//brush(vertexGroup[42]);

vertexGroup[43] = [345,265,294,429,328,455,377,398];
//brush(vertexGroup[43]);

vertexGroup[44] = [241,477,328,455,320,400,218,460];
//brush(vertexGroup[44]);

vertexGroup[45] = [416,397,416,397,506,384,506,384];
//brush(vertexGroup[45]);

vertexGroup[46] = [432,395,432,395,504,388,504,388];
//brush(vertexGroup[46]);

vertexGroup[47] = [450,658,487,421,436,437,530,700];
//brush(vertexGroup[47]);

vertexGroup[48] = [424,342,487,421,455,459,350,380];
//brush(vertexGroup[48]);

vertexGroup[49] = [441,384,436,437,455,459,480,440];
//brush(vertexGroup[49]);

vertexGroup[50] = [273,700,530,475,525,516,242,500];
//brush(vertexGroup[50]);

//ears
vertexGroup[50] = [198,430,344,223,294,69,236,-2];
//brush(vertexGroup[50]);

vertexGroup[51] = [267,380,362,214,318,103,282,76];
//brush(vertexGroup[51]);

vertexGroup[52] = [420,256,303,230,294,102,353,111];
//brush(vertexGroup[52]);

vertexGroup[53] = [345,530,506,237,493,62,428,23];
//brush(vertexGroup[53]);

vertexGroup[54] = [369,407,516,227,509,109,468,74];
//brush(vertexGroup[54]);

vertexGroup[55] = [552,289,463,229,494,89,541,42];
//brush(vertexGroup[55]);

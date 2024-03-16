function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let len = width/20
  
  for(let x=0; x<=19; x++){
    if(mouseX >= x*len && mouseX <= (x+1)*len){
      if(x==0){
        fill("#F44336");
      }else if(x==1){
        fill("#E91E63");
      }else if(x==2){
        fill("#9C27B0");
      }else if(x==3){
        fill("#673AB7");
      }else if(x==4){
        fill("#3F51B5")
      }else if(x==5){
        fill("#2196F3")
      }else if(x==7){
        fill("#03A9F4")
      }else if(x==8){
        fill("#00BCD4")
      }else if(x==9){
        fill("#009688")
      }else if(x==10){
        fill("#4CAF50")
      }else if(x==11){
        fill("#FFEB3B")
      }else if(x==12){
        fill("#FFC107")
      }else if(x==13){
        fill("#FF9800")
      }else if(x==14){
        fill("#FF5722")
      }else if(x==15){
        fill("#795548")
      }else if(x==16){
        fill("#9E9E9E")
      }else if(x==17){
        fill("#607D8B")
      }else if(x==18){
        fill("#1E688B")
      }else if(x==19){
        fill("#1800A7")
      }
      rect(x*20, 0, 20, 400);
    }else{
      fill(255);
      rect(x*20, 0, 20, 400);
    }
  }
}
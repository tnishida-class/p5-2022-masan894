// 小手調べ
function setup(){
  createCanvas(400,400);
  fill(255);
  for(let i = 200; i >= 20; i -= 20){
    // BLANK[1]
  if(i >= 120){
    stroke(255, 0, 0);
    ellipse(200, 200, i);
  }
  else{
    stroke(0, 0, 255);
    ellipse(200, 200, i);
  }
}
}

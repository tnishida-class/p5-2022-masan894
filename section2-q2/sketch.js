// チェッカー
/*function setup() {
  createCanvas(320,320);
   noStroke();
for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
    if((i + j) % 2 === 0){
      fill(255);
      rect(i * 40, j * 40, 40, 40);
      } 
    else{
    fill(119,136,153);
    rect(i * 40, j * 40, 40, 40);
    }
    }
}
}
西田先生のサンプルコード*/
function setup() {
  createCanvas(320, 320);
  noStroke();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 !== 0 && j <= 2) {
        //i+jが偶数の上3行に黒＋赤丸
        fill(119, 136, 153);
        rect(i * 40, j * 40, 40, 40);
        fill(255, 0, 0);
        circle(i * 40 + 20, j * 40 + 20, 35);
      } else if ((i + j) % 2 !== 0 && j > 2 && j <= 4) {
        //i+jが偶数の4,5行目に黒
        fill(119, 136, 153);
        rect(i * 40, j * 40, 40, 40);
      } else if ((i + j) % 2 !== 0 && j > 4 && j <= 7) {
        //i+jが偶数の下3行に黒＋黒丸
        fill(119, 136, 153);
        rect(i * 40, j * 40, 40, 40);
        fill(0);
        circle(i * 40 + 20, j * 40 + 20, 35);
      } else {
        //それ以外のiとjの組み合わせ全てに白
        fill(255);
        rect(i * 40, j * 40, 40, 40);
      }
    }
  }
}

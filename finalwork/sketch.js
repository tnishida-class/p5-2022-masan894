/*
最終課題「国旗チェンジャー」
マウスをクリックすると3種類の国旗を順に表示!
*/
function setup() {
  createCanvas(700, 350);
}

//マウスがクリックされたときflagNumber変数を1増やす
let flagNumber = 0;
function mouseClicked() {
  flagNumber += 1;
}

function draw() {
  if (flagNumber % 3 == 0) {
    //flagNumber変数が3nの時はオーストラリア国旗を描画
    unionJack(350, 175);
    fill(1, 33, 105);
    stroke(1, 33, 105);
    strokeWeight(10);
    rect(350 + 5, 0, 350, 175);
    rect(0, 175 + 5, 700, 175);

    //五芒星の描画
    fill(255);
    stroke(255);
    strokeWeight(1);
    star(550, 190, 15);

    //七芒星の描画
    s_star(525, 70, 22.5);
    s_star(175, 260, 50);
    s_star(610, 130, 22.5);
    s_star(425, 160, 22.5);
    s_star(525, 290, 22.5);
  } else if (flagNumber % 3 == 1) {
    //flagNumber変数が3n+1の時はニュージーランド国旗を描画
    unionJack(350, 175);
    //背景色
    fill(1, 33, 105);
    stroke(1, 33, 105);
    strokeWeight(10);
    rect(350 + 5, 0, 350, 175);
    rect(0, 175 + 5, 700, 175);

    //白い輪郭、赤い塗りつぶしの五芒星を描画
    fill(200, 16, 46);
    stroke(255);
    strokeWeight(1.5);
    star(525, 70, 22.5);
    star(610, 130, 22.5);
    star(425, 160, 22.5);
    star(525, 290, 22.5);
  } else {
    //flagNumber変数が3n+2の時はツバル国旗を描画
    unionJack(350, 175);
    fill(0, 156, 222);
    stroke(0, 156, 222);
    strokeWeight(10);
    rect(350 + 5, 0, 350, 175);
    rect(0, 175 + 5, 700, 175);

    //黄色い五芒星を描画
    fill(254, 221, 0);
    stroke(254, 221, 0);
    strokeWeight(1);
    star(640, 45, 30);
    star(640, 190, 30);
    star(570, 240, 30);
    star(370, 310, 30);

    //黄色い逆さ五芒星を描画
    r_star(575, 100, 30);
    r_star(505, 135, 30);
    r_star(505, 280, 30);
    r_star(435, 215, 30);
    r_star(440, 290, 30);
  }
}

//五芒星を描画する関数
function star(cx, cy, r) {
  beginShape();
  for (let i = 0; i < 5; i++) {
    const theta = (TWO_PI * i * 2) / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

//逆さ五芒星を描画する関数
function r_star(cx, cy, r) {
  beginShape();
  for (let i = 0; i < 5; i++) {
    const theta = (TWO_PI * i * 2) / 5 - HALF_PI - 120;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

// 七芒星を描画する関数
function s_star(cx, cy, r) {
  {
    beginShape();
    for (let i = 0; i < 7; i++) {
      const theta = (TWO_PI * i * 3) / 7 - HALF_PI;
      const x = cx + cos(theta) * r;
      const y = cy + sin(theta) * r;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}

function unionJack(x, y) {
  //色を定数に
  const red = color(200, 16, 46);
  const blue = color(1, 33, 105);
  const white = color(255);
  //青い長方形を描画
  stroke(blue);
  fill(blue);
  rect(0, 0, x, y);
  //白い斜線を描画
  strokeWeight(x / 10);
  stroke(white);
  line(0, 0, x, y);
  line(x, 0, 0, y);
  //赤い斜線を描画
  strokeWeight(x / 30);
  stroke(red);
  line(0, x / 60, x / 2, y / 2 + x / 60);
  line(x / 60, y, x / 2 + x / 60, y / 2);
  line(x - x / 60, 0, x / 2 - x / 60, y / 2);
  line(x, y - x / 60, x / 2, y / 2 - x / 60);
  //白い縦横線を描画
  strokeWeight(x / 7);
  stroke(white);
  line(x / 2, 0, x / 2, y);
  line(0, y / 2, x, y / 2);
  //赤い縦横線を描画
  strokeWeight((x / 700) * 55);
  stroke(red);
  line(x / 2, 0, x / 2, y);
  line(0, y / 2, x, y / 2);
}

/*　先に700×350ベースでユニオンジャックを作り、widthをxに、heightをyに置換してunionJack関数を作成
function draw() {
  const red = color(200, 16, 46);
  const blue = color(1, 33, 105);
  const white = color(255);

  stroke(blue);
  fill(blue);
  rect(0, 0, width, height);

  strokeWeight(70);
  stroke(white);
  line(0, 0, width, height);
  line(width, 0, 0, height);

  strokeWeight(25);
  stroke(red);
  line(0, 12.5, width / 2, height / 2 + 12.5);
  line(12.5, height, width / 2 + 12.5, height / 2);
  line(width - 12.5, 0, width / 2 - 12.5, height / 2);
  line(width, height - 12.5, width / 2, height / 2 - 12.5);

  strokeWeight(100);
  stroke(white);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);

  strokeWeight(60);
  stroke(red);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
}
*/

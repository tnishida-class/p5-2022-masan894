// 最終課題を制作しよう
function setup() {
  createCanvas(700, 350);
}

function draw() {
  unionJack(350, 175); //ユニオンジャック関数を左上に適用
  fill(1, 33, 105); //左上以外のパーツを塗りつぶす
  stroke(1, 33, 105);
  strokeWeight(10);
  rect(350 + 5, 0, 350, 175);
  rect(0, 175 + 5, 700, 175);
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
  strokeWeight((x / 700) * 60);
  stroke(red);
  line(x / 2, 0, x / 2, y);
  line(0, y / 2, x, y / 2);
}

/*　先に700×350ベースでユニオンジャックを作り、widthをxに、heightをyに置換してunionJack関数を作成
function draw() {
  //色を定数に
  const red = color(200, 16, 46);
  const blue = color(1, 33, 105);
  const white = color(255);
  //青い長方形を描画
  stroke(blue);
  fill(blue);
  rect(0, 0, width, height);
  //白い斜線を描画
  strokeWeight(70);
  stroke(white);
  line(0, 0, width, height);
  line(width, 0, 0, height);
  //赤い斜線を描画
  strokeWeight(25);
  stroke(red);
  line(0, 12.5, width / 2, height / 2 + 12.5);
  line(12.5, height, width / 2 + 12.5, height / 2);
  line(width - 12.5, 0, width / 2 - 12.5, height / 2);
  line(width, height - 12.5, width / 2, height / 2 - 12.5);
  //白い縦横線を描画
  strokeWeight(100);
  stroke(white);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  //赤い縦横線を描画
  strokeWeight(60);
  stroke(red);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
}
*/

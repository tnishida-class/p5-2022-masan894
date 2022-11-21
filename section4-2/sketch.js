//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup() {
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw() {
  background(160, 192, 255);
  let dx = random(5, 50);
  let dy = random(5, 50);
  if (mag(dx, dy) > 5) {
    const b = { x: mouseX, y: mouseY, size: random(20, 100), vx: dx, vy: dy };
    balls.push(b);
  }
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
}

function mouseDragged() {
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  //randomSize = random(20, 100); 27行目に組み込んだので不要
  if (mag(dx, dy) > 5) {
    const b = { x: mouseX, y: mouseY, size: random(20, 100), vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

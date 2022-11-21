// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
document.write("Press any key!");

function setup() {
  createCanvas(windowWidth * 0.9, windowHeight * 0.9);
  count = 0;
  cycle = 110;
}

function draw() {
  background(160, 192, 255);
  count = (count + 1.6) % cycle;
  size = count * 3;
  ellipse(width / 2, height / 2, size);
  if (keyIsDown(32)) {
    count += 2;
  }
}

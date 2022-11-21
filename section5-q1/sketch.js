// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup() {
  createCanvas(1000, 1000);
  background(255);
  balloon("I love keyakizaka46", 300, 300);
  balloon("I love Arknights", 200, 200);
  balloon("I love Origami", 100, 100);
}

function balloon(t, x, y) {
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(0);
  rect(x, y, w + p * 2, h + p * 2);
  fill(255);
  text(t, x + p, y + h - p);
  fill(0);
  triangle(
    x + w + p * 2 - 30,
    y + h + p * 2,
    x + w + p * 2 - 10,
    y + h + p * 2,
    x + w + p * 2,
    y + h + p * 2 + 15
  );
}

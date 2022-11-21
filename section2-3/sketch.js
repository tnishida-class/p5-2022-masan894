// テキスト「二重ループ」
// (1)「偶数『行』の四角形の色を変える」パターン
// (2)練習：「偶数『列』の四角形の色を変える」パターンに変えてみましょう

// (1)「偶数『行』の四角形の色を変える」パターン
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      fill(j % 2 == 0 ? 255 : 0); // ここを変えます
      console.log(i, j);
      rect(i * 40, j * 40, 20, 20);
    }
  }
}

/* (2)練習：「偶数『列』の四角形の色を変える」パターンに変えてみましょう
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      fill(i % 2 == 0 ? 255 : 0); // ここを変えます
      console.log(i, j);
      rect(i * 40, j * 40, 20, 20);
    }
  }
}*/

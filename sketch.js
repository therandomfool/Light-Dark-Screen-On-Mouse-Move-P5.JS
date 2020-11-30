function setup() {
  createCanvas(900, 900);
}

function draw() {
  // background
  col = map(mouseX , 0, 900, 0, 255);
  background(col);

  // ellipse
  let a = random(0,255)
  let b = random(0,255)
  let c = random(0,255)
  fill(a,b,c);
  ellipse(mouseX, mouseY, 64, 64);
}

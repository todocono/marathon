function setup() {
  createCanvas(640, 480);
}

function draw() {
  var color1=random(256);
  var color2=random(256);
  var color3=random(256);
  fill(color1,color2,color3);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 80, 80);
  }
}

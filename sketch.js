var bubbles = [];

setup = function () {
  createCanvas(600, 600);
};

draw = function () {
  background(0);

  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));

  bubbles.forEach(function updateAndDisplay (bubble) {
  bubble.display();
  bubble.update();
});
};

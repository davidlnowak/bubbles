var bubbles = [];

var loadBubbles = function(totalBubbles) {
  for (var index = 0; index < totalBubbles; ++index) {
    bubbles.push(new Bubble(random(25, width-25), random(height/2-100, height/2+100)))
  }
};

setup = function () {
  createCanvas(600, 600);

  loadBubbles(500);
};

draw = function () {
  background(0);

  bubbles.forEach(function updateAndDisplay (bubble) {
  bubble.display();
  bubble.update();
});
};

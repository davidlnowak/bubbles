var stars = [];

function setup() {
  createCanvas(800, 600);
  while (stars.length < 255) {
    stars.push( new Star( random(width), random(height), floor(random(4,8)), random(5, 40) ) );
  }
  noStroke();
  frameRate(3);
};

function draw() {
  background(10, 0, 10);
  for (var i = 0; i< stars.length; i++) {
    stars[i].display();
    stars[i].update();
  }
};

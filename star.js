/*
  The idea and the main algorithm for the stars comes fromm the following pen example: 
  http://codepen.io/norskov/pen/MwWwdb
*/

var Star = function(x, y, startPoints, startSize) {
  this.position = new p5.Vector(x, y);
  this.size = startSize;
  this.points = startPoints;
  this.angleStep = radians(360) / this.points;
};

Star.prototype = {
  angle: 0,

  display: function() {
    beginShape();
    for (var i = 0; i< this.points; i++) {
      vertex( this.position.x + Math.cos(this.angle)* this.size, this.position.y + Math.sin(this.angle)* this.size );
      vertex( this.position.x + Math.cos(this.angle + this.angleStep/2)*this.size/3, this.position.y + Math.sin(this.angle + this.angleStep/2)*this.size/3 );
      this.angle += this.angleStep;
    }
    fill(random(1, 255), random(1, 255), random(1, 255) );
    endShape(CLOSE);
  },

  update: function () {
    this.position.x = random(this.position.x-2, this.position.x+2);
    this.position.y = random(this.position.y-2, this.position.y+2);
  }
};

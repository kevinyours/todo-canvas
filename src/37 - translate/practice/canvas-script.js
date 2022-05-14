window.onload = function () {
  // Definitions
  var canvas = document.getElementById("translate-canvas");
  var context = canvas.getContext("2d");

  // context.translate(x,y) -> moves the canvas and its origin to (x,y)
  // x: Distance to move in the horizontal direction
  // y: Distance to move in the vertical direction

  // Rectangle
  context.fillStyle = "red";
  context.fillRect(50, 50, 160, 160);
  context.fill();

  context.translate(300, 200);

  context.fillStyle = "red";
  context.fillRect(50, 50, 160, 160);
  context.fill();
};

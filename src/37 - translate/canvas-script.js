


window.onload = function () {

  // Definitions
  var canvas = document.getElementById("translate-canvas");
  var context = canvas.getContext("2d");


  // context.translate(x,y) -> moves the canvas and its origin to (x,y)
  // x: Distance to move in the horizontal direction
  // y: Distance to move in the vertical direction


  // Original Rectangle
  context.fillStyle = "red";
  context.fillRect(50, 50, 160, 160);
  context.fill();

  // Translate Canvas
  context.translate(300, 200);

  // Translated Rectangle
  context.fillStyle = "red";
  context.fillRect(50, 50, 160, 160);
  context.fill();




};

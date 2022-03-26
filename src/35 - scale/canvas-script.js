


window.onload = function () {

  // Definitions
  var canvas = document.getElementById("scale-canvas");
  var context = canvas.getContext("2d");


  // context.scale(horizontalScaleFactor, verticalScaleFactor) -> Scales the canvas context
  // horizontalScaleFactor (double): Scales the width of the current drawing (1=100%, 0.5=50%, 2=200%, etc.)
  // verticalScaleFactor (double):   Scales the height of the current drawing (1=100%, 0.5=50%, 2=200%, etc.)


  // Red Rectangle
  context.fillStyle = "red";
  context.fillRect(250, 250, 400, 160);
  context.fill();

  // Scale
  context.scale(0.5, 0.5);

  // Blue Rectangle
  context.fillStyle = "blue";
  context.fillRect(250, 250, 400, 160);
  context.fill();

  // Scale
  context.scale(0.5, 0.5);

  // Green Rectangle
  context.fillStyle = "green";
  context.fillRect(250, 250, 400, 160);
  context.fill();










};

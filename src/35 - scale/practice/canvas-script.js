window.onload = function () {
  // Definitions
  var canvas = document.getElementById("scale-canvas");
  var context = canvas.getContext("2d");

  // Red Rectangle
  context.fillStyle = "red";
  context.fillRect(50, 50, 100, 40);
  context.fill();

  // Scale
  context.scale(2, 2);

  // Blue Rectangle
  context.fillStyle = "blue";
  context.fillRect(50, 50, 100, 40);
  context.fill();

  // Scale
  context.scale(0.5, 0.5);

  // Green Rectangle
  context.fillStyle = "green";
  context.fillRect(250, 250, 400, 160);
  context.fill();
};

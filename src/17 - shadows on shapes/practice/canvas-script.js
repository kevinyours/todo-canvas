window.onload = function () {
  // Definitions
  var canvas = document.getElementById("shadows-canvas");
  var context = canvas.getContext("2d");

  var radian = Math.PI / 180;

  /*
  Shadow attributes on canvas
  - shadowColor
  - shadowOffsetX
  - shadowOffsetY
  - shadowBlur
  */

  // Rectangle
  context.beginPath();
  context.strokeStyle = "green";
  context.fillStyle = "green";
  context.shadowColor = "blue";
  context.shadowOffsetX = 5;
  context.shadowOffsetY = 5;
  context.shadowBlur = 5;
  context.rect(150, 100, 150, 400);
  context.stroke();
  context.fill();

  // circle
  context.beginPath();
  context.strokeStyle = "red";
  context.fillStyle = "red";
  context.shadowColor = "green";
  context.shadowOffsetX = -10;
  context.shadowOffsetY = -10;
  context.arc(650, 300, 100, 0 * radian, 360 * radian, false);
  context.stroke();
  context.fill();
};

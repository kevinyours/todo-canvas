window.onload = function () {
  // Definitions
  var canvas = document.getElementById("circular-objects-canvas");
  var context = canvas.getContext("2d");

  var radian = Math.PI / 180;

  // context.arc(centerX, centerY, radius, startAngle, endAngle, antiClockwiseDirection);

  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 15;
  context.fillStyle = "orange";
  context.arc(450, 300, 150, 0 * radian, 360 * radian);
  context.stroke();
  context.fill();
};

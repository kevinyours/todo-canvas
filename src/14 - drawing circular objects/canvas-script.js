




window.onload = function () {

  // Definitions
  var canvas = document.getElementById("circular-objects-canvas");
  var context = canvas.getContext("2d");

  var radian = Math.PI / 180;

  // context.arc(centerX, centerY, radius, startAngle, endAngle, antiClockwiseDirection);

  context.beginPath();
  context.strokeStyle = "orange";
  context.lineWidth = 15;
  context.fillStyle = "orange";
  context.arc(450, 300, 150, 135 * radian, 360 * radian, false);
  context.stroke();
  context.fill();


}

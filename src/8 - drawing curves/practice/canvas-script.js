window.onload = function () {
  // Definitions
  var canvas = document.getElementById("curves-canvas");
  var context = canvas.getContext("2d");

  const radian = Math.PI / 180;

  // first arc
  context.beginPath();
  context.strokeStyle = "blue";
  context.lineWidth = 10;
  context.arc(100, 100, 50, 0 * radian, 180 * radian, false);
  context.stroke();

  // second arc
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.arc(300, 200, 50, 45 * radian, 135 * radian, false);
  context.stroke();

  // third arc
  context.beginPath();
  context.strokeStyle = "green";
  context.lineWidth = 10;
  context.arc(300, 100, 50, 45 * radian, 130 * radian, true);
  context.stroke();
};




window.onload = function () {

  // Definitions
  var canvas = document.getElementById("rotate-canvas");
  var context = canvas.getContext("2d");

  var radian = Math.PI / 180; // 1 unit radian

  // context.rotate(rotationAmount) -> Rotate the canvas context
  // rotationAmount (radian): The angle amount of rotation


  // Rotate
  context.rotate(50 * radian);

  // Rectangle
  context.fillStyle = "red";
  context.fillRect(250, 250, 400, 160);
  context.fill();



};

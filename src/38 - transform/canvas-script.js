


window.onload = function () {

  // Definitions
  var canvas = document.getElementById("transform-canvas");
  var context = canvas.getContext("2d");



  // context.transform(m11, m12, m21, m22, dx, dy)
  // context.setTransform(m11, m12, m21, m22, dx, dy)
  // context.resetTransform()


  // Red Rectangle
  context.fillStyle = "red";
  context.fillRect(150, 150, 200, 100);
  context.fill();

  // Scale Transform
  context.resetTransform();

  // Blue Rectangle
  context.fillStyle = "blue";
  context.fillRect(150, 150, 200, 100);
  context.fill();

  // Scale Transform
  context.transform(1.5, 0, 0, 1.5, 0, 0);

  // Green Rectangle
  context.fillStyle = "green";
  context.fillRect(150, 150, 200, 100);
  context.fill();

  // Scale Transform
  context.resetTransform();

  // Green Rectangle
  context.fillStyle = "purple";
  context.fillRect(150, 150, 200, 100);
  context.fill();









};

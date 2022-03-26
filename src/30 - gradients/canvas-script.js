


window.onload = function () {

  // Definitions
  var canvas = document.getElementById("gradients-canvas");
  var context = canvas.getContext("2d");

  // context.createLinearGradient(x1, y1, x2, y2)
  // context.createRadialGradient(x1, y1, r1, x2, y2, r2)

  /*
  // LINEAR GRADIENT
  var linearGradient = context.createLinearGradient(240, 40, 660, 680);
  linearGradient.addColorStop(0, "red");
  linearGradient.addColorStop(0.25, "blue");
  linearGradient.addColorStop(0.5, "green");
  linearGradient.addColorStop(0.75, "orange");
  linearGradient.addColorStop(1, "white");

  */

  // RADIAL GRADIENT
  var radialGradient = context.createRadialGradient(570, 380, 300, 570, 300, 20);
  radialGradient.addColorStop(0, "red");
  radialGradient.addColorStop(0.25, "blue");
  radialGradient.addColorStop(0.5, "green");
  radialGradient.addColorStop(0.75, "orange");
  radialGradient.addColorStop(1, "white");


  // addColorStop(stop, color);

  context.strokeStyle = "blue";
  context.lineWidth = 4;
  context.fillStyle = radialGradient;
  context.rect(240, 40, 420, 420);
  context.stroke();
  context.fill();





};

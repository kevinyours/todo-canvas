window.onload = function () {
  // Definitions
  var canvas = document.getElementById("gradients-canvas");
  var context = canvas.getContext("2d");

  /** LINEAR GRADIENT
  const gradient = context.createLinearGradient(240, 40, 660, 680);
  gradient.addColorStop(0, "red");
  gradient.addColorStop(0.25, "blue");
  gradient.addColorStop(0.5, "green");
  gradient.addColorStop(0.75, "orange");
  gradient.addColorStop(1, "white");
  */

  // RADIAL GRADIENT
  const radialGradient = context.createRadialGradient(
    570,
    380,
    300,
    570,
    300,
    20,
  );
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

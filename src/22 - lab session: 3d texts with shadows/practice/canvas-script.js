window.onload = function () {
  // Definitions
  var canvas = document.getElementById("three-d-text-canvas");
  var context = canvas.getContext("2d");

  /*
  var text = "This text will be in 3D";

  // Layer 1
  context.fillStyle = "black";
  context.fillText(text, 99, 298);

  // Layer 2
  context.fillText(text, 98, 298);

  // Layer 3
  context.fillText(text, 97, 297);

  // Layer 4
  context.fillText(text, 96, 296);

  // Original Text
  context.fillStyle = "violet";
  context.fillText(text, 100, 300);
  */

  draw3DText(
    "This text will be in 3D",
    100,
    300,
    "normal 600 54px monospace",
    "violet",
    5,
  );

  function draw3DText(text, x, y, style, color, size) {
    context.font = style;
    context.fillStyle = "black";

    for (var i = 0; i < size; i++) {
      context.fillText(text, x - i, y - i);
    }

    context.fillStyle = color;
    context.fillText(text, x, y);
  }
};

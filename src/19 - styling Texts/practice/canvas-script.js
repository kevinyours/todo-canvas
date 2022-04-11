window.onload = function () {
  // Definitions
  var canvas = document.getElementById("styling-texts-canvas");
  var context = canvas.getContext("2d");

  var text = "This text will be styled!";

  context.font = "normal 800 xx-large times";
  context.fillText(text, 100, 100);

  context.font = "italic 400 48px monospace";
  context.strokeText(text, 100, 200);
};

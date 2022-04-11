window.onload = function () {
  // Definitions
  var canvas = document.getElementById("basic-texts-canvas");
  var context = canvas.getContext("2d");

  context.font = "45px Verdana";

  var fText = "Fill Text on Canvas";

  context.fillText(fText, 80, 100, 100);

  var sText = "Stroke Text on Canvas";

  context.strokeText(sText, 80, 200, 400);
};






window.onload = function () {

  // Definitions
  var canvas = document.getElementById("text-shadows-canvas");
  var context = canvas.getContext("2d");


  /*
  Shadow attributes on canvas
  - shadowColor
  - shadowOffsetX
  - shadowOffsetY
  - shadowBlur
  */


  var text = "This text will be shadowed!";

  // FillText Function
  context.font = "normal 700 24px times";
  context.shadowColor = "red";
  context.shadowOffsetX = 5;
  context.shadowOffsetY = 5;
  context.shadowBlur = 4;
  context.fillText(text, 100, 100);

  // StrokeText Function
  context.font = "italic 400 48px monospace";
  context.shadowColor = "green";
  context.shadowOffsetX = -5;
  context.shadowOffsetY = -5;
  context.shadowBlur = 4;
  context.strokeText(text, 100, 400);



















}

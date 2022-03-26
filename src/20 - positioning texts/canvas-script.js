




window.onload = function () {

  // Definitions
  var canvas = document.getElementById("positioning-texts-canvas");
  var context = canvas.getContext("2d");

  // context.textAlign = "center | end | left | right | start";
  // Specifies how text is aligned horizontally
  // The default value is "start"

  // context.textBaseline = "alphabetic | top | hanging | middle | ideographic | bottom";
  // Specifies how text is aligned vertically
  // The default value is "alphabetic"


  // Vertical Reference Line
  context.strokeStyle = "red";
  context.moveTo(300, 20);
  context.lineTo(300, 430);
  context.stroke();

  // Define a style
  context.font = "italic 400 18px monospace";

  // Apply textAlign values
  context.textAlign = "start";
  context.fillText("start", 300, 20);

  context.textAlign = "center";
  context.fillText("center", 300, 50);

  context.textAlign = "left";
  context.fillText("left", 300, 80);

  context.textAlign = "end";
  context.fillText("end", 300, 110);

  context.textAlign = "right";
  context.fillText("right", 300, 140);


  // Horizontal Reference Line
  context.strokeStyle = "red";
  context.moveTo(20, 300);
  context.lineTo(580, 300);
  context.stroke();

  // Apply textBaseline values
  context.textBaseline = "alphabetic";
  context.fillText("alphabetic", 120, 300);

  context.textBaseline = "top";
  context.fillText("top", 220, 300);

  context.textBaseline = "hanging";
  context.fillText("hanging", 320, 300);

  context.textBaseline = "middle";
  context.fillText("middle", 420, 300);

  context.textBaseline = "ideographic";
  context.fillText("ideographic", 520, 300);

  context.textBaseline = "bottom";
  context.fillText("bottom", 620, 300);










}

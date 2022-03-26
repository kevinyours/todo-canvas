



window.onload = function () {

  // Definitions
  var canvas = document.getElementById("lab-complex-shapes-canvas");
  var context = canvas.getContext("2d");

  /*
  lineCap = butt|round|square
  lineJoin = bevel|round|miter
  shadowColor = color of shadow
  shadowBlur = 	blur amount of shadows
  shadowOffsetX	= horizontal distance of the shadow from the shape
  shadowOffsetY	= vertical distance of the shadow from the shape
  */

// First Z Object
context.beginPath();
context.strokeStyle = "red";
context.lineWidth = 15;
context.lineCap = "butt";
context.lineJoin = "miter";
context.shadowColor = "blue";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10;
context.moveTo(60, 80);
context.lineTo(160, 80);
context.lineTo(80, 180);
context.lineTo(180, 180);
context.stroke();

// Second Z Object
context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = 15;
context.lineCap = "round";
context.lineJoin = "round";
context.shadowColor = "yellow";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10;
context.moveTo(340, 80);
context.lineTo(240, 80);
context.lineTo(340, 180);
context.lineTo(240, 180);
context.stroke();

// Third Z Object
context.beginPath();
context.strokeStyle = "green";
context.lineWidth = 15;
context.lineCap = "square";
context.lineJoin = "bevel";
context.shadowColor = "red";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10;
context.moveTo(420, 80);
context.lineTo(520, 80);
context.lineTo(440, 180);
context.lineTo(540, 180);
context.stroke();










}

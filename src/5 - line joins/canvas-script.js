



window.onload = function () {

  // Definitions
  var canvas = document.getElementById("line-joins-canvas");
  var context = canvas.getContext("2d");


  /*

  Line Joins -> context.lineJoin = "miter|bevel|round";
  - miter -> default value
  - bevel
  - round

  */

  // first line -> miter
  context.beginPath();
  context.lineWidth = 20;
  context.lineJoin = "miter";
  context.moveTo(30,30);
  context.lineTo(130,30);
  context.lineTo(130,130);
  context.lineTo(30,130);
  context.lineTo(30,230);
  context.stroke();

  // second line -> bevel
  context.beginPath();
  context.lineWidth = 20;
  context.strokeStyle = "red";
  context.lineJoin = "bevel";
  context.moveTo(60,60);
  context.lineTo(160,60);
  context.lineTo(160,160);
  context.lineTo(60,160);
  context.lineTo(60,260);
  context.stroke();


  // third line -> round
  context.beginPath();
  context.lineWidth = 20;
  context.strokeStyle = "blue";
  context.lineJoin = "round";
  context.moveTo(90,90);
  context.lineTo(190,90);
  context.lineTo(190,190);
  context.lineTo(90,190);
  context.lineTo(90,290);
  context.stroke();




















}

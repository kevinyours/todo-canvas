window.onload = function () {
  var canvas = document.getElementById("line-canvas");
  var context = canvas.getContext("2d");

  context.beginPath(); // reset the context state
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(30, 70); // moveTo(x,y) => starting point of the line
  context.lineTo(130, 70); // line(x,y) => end point of the line
  context.stroke();
};

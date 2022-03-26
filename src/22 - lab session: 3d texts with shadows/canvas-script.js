




window.onload = function () {

  // Definitions
  var canvas = document.getElementById("three-d-text-canvas");
  var context = canvas.getContext("2d");



  draw3DText("This text will be in 3D", 100, 300, "normal 600 54px monospace", "red", 5)


  function draw3DText(text, x, y, style, color, size){
    context.font = style;
    context.fillStyle = "black";

    for(var i = 0; i < size; i++){
      context.fillText(text, x - i, y - i);
    }

    context.fillStyle = color;
    context.fillText(text, x, y);
  }















}

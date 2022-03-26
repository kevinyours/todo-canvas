


window.onload = function () {

  // Definitions
  var canvas = document.getElementById("images-canvas");
  var context = canvas.getContext("2d");

  // drawImage(img, dx, dy)
  // drawImage(img, dx, dy, dw, dh)
  // drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

  var img = new Image();
  img.src = "regularshow.png";


  img.onload = function () {
    context.drawImage(img, 40, 100, 150, 250, 250, 50, 250, 400);
  };















}

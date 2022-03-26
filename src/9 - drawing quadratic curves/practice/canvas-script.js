window.onload = function () {
  // Definitions
  var canvas = document.getElementById("quadratic-curves-canvas");
  var context = canvas.getContext("2d");

  // quadratic: 2차
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(200, 250);
  context.quadraticCurveTo(500, 110, 400, 250);
  context.stroke(); // 윤곽선을 이용하여 도형을 그립니다.
};

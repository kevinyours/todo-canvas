window.onload = function () {
  const canvas = document.getElementById("multi-line-canvas");
  const context = canvas.getContext("2d");

  //   context.beginPath();
  //   context.moveTo(30, 30);
  //   context.lineTo(80, 80);
  //   context.stroke();

  //   context.beginPath();
  //   context.moveTo(80, 80);
  //   context.lineTo(130, 30);
  //   context.stroke();

  //   context.beginPath();
  //   context.moveTo(130, 30);
  //   context.lineTo(180, 80);
  //   context.stroke();

  //   context.beginPath();
  //   context.moveTo(180, 80);
  //   context.lineTo(230, 30);
  //   context.stroke();

  context.beginPath();
  context.moveTo(30, 30);
  context.lineTo(80, 80);
  context.lineTo(130, 30);
  context.lineTo(180, 80);
  context.lineTo(230, 30);
  context.stroke();
};

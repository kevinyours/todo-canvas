window.onload = function () {
  // Definitions
  var canvas = document.getElementById(
    "horizontal-and-angular-projection-canvas",
  );
  var context = canvas.getContext("2d");

  var g = 0.098; // gravity

  const ball1 = new Ball(20, "blue");
  ball1.x = 90;
  ball1.y = 50;
  ball1.context = context;
  ball1.draw();

  const ball2 = new Ball(20, "green");
  ball2.x = 90;
  ball2.y = 550;
  ball2.context = context;
  ball2.draw();

  window.requestAnimationFrame(animationLoop);

  ball1.vx = 5;
  ball1.vy = 0;

  ball2.vx = 5;
  ball2.vy = -5;

  function animationLoop() {
    // Clear Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    ball1.vy = ball1.vy + g;
    ball1.x = ball1.x + ball1.vx;
    ball1.y = ball1.y + ball1.vy;

    ball2.vy = ball2.vy + g;
    ball2.x = ball2.x + ball2.vx;
    ball2.y = ball2.y + ball2.vy;

    ball1.draw();
    ball2.draw();

    // Animate
    window.requestAnimationFrame(animationLoop);
  }

  window.requestAnimationFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
};

window.onload = function () {
  // Definitions
  var canvas = document.getElementById("vertical-projection-canvas");
  var context = canvas.getContext("2d");

  const g = 0.098; // gravity

  // Ball 1
  var ball1 = new Ball(20, "blue");
  ball1.x = 100;
  ball1.y = 80;
  ball1.context = context;

  // Ball 2
  var ball2 = new Ball(20, "green");
  ball2.x = 300;
  ball2.y = 80;
  ball2.context = context;

  // Ball 3
  var ball3 = new Ball(20, "red");
  ball3.x = 500;
  ball3.y = 500;
  ball3.context = context;

  window.requestAnimationFrame(animationLoop);

  function animationLoop() {
    // Clear Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    ball1.vy = ball1.vy + g;
    ball1.y = ball1.y + ball1.vy;

    ball2.vy = ball2.vy + g;
    ball2.y = ball2.y + ball2.vy;

    ball3.vy = ball3.vy + g;
    ball3.y = ball3.y + ball3.vy;

    ball1.draw();
    ball2.draw();
    ball3.draw();

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

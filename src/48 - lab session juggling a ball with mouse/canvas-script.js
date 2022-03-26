
window.onload = function () {

  // Definitions
  var canvas = document.getElementById("juggling-lab-canvas");
  var context = canvas.getContext("2d");

  var g = 0.098 // gravity
  var mouseX = 0;
  var mouseY = 0;

  // Ball
  var ball = new Ball(25, 'blue');
  ball.x = 400;
  ball.y = 80;
  ball.context = context;

  // Mouse listener
  canvas.addEventListener('mousemove', function(event) {
    var boundings = canvas.getBoundingClientRect();
    mouseX = event.clientX - boundings.left;
    mouseY = event.clientY - boundings.top;
  });


  window.requestAnimationFrame(animationLoop);

    function animationLoop() {

    // Clear Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Update
    ball.vy = ball.vy + g;
    ball.y = ball.y + ball.vy;

    // Mouse Collision Check
    if(Math.sqrt(Math.pow((ball.x - mouseX), 2) + Math.pow((ball.y - mouseY), 2)) < ball.r){
      ball.vy *= -1;
    }

    // Draw
    ball.draw();

    // Animate
    window.requestAnimationFrame(animationLoop);
  }


  window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.msRequestAnimationFrame     ||
            function(callback){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
};

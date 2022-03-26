
window.onload = function () {

  // Definitions
  var canvas = document.getElementById("drag-and-drop-lab-canvas");
  var context = canvas.getContext("2d");
  var boundings = canvas.getBoundingClientRect();

  // Specs
  var balls = 5;
  var ballsArr = [];
  var currentBall = null;

  // Create Balls
  for(var i = 0; i < balls; i++){
    var radius = getRandomInt(25, 50);
    var randColor = createRandomRGBColor();
    var ballColor = 'rgb(' + randColor.r + ',' + randColor.g + ',' + randColor.b +')';
    var ball = new Ball(radius, ballColor);
    ball.context = context;
    ball.x = getRandomInt(radius, canvas.width - radius);
    ball.y = getRandomInt(radius, canvas.height - radius);
    ballsArr.push(ball);
  }

  drawBalls();

  function drawBalls(){
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draws Balls
    for(var i = 0; i < balls; i++){
      ballsArr[i].draw();
    }
  }

  function isHitOnBall(mx, my){
    console.log('alperen');
    for(var i = balls - 1; i >= 0; i--){
      if(Math.sqrt(Math.pow((mx - ballsArr[i].x) , 2) + Math.pow((my - ballsArr[i].y) , 2)) < ballsArr[i].r){
        currentBall = ballsArr[i];
        break;
      }
    }
  }


  // Mouse Event Handlers
  canvas.addEventListener('mousedown', function(event) {
    console.log('mousedown');
    var mouseDownX = event.clientX - boundings.left;
    var mouseDownY = event.clientY - boundings.top;
    isHitOnBall(mouseDownX, mouseDownY);
  });

  canvas.addEventListener('mousemove', function(event) {
    console.log('mousemove');
    var mouseMoveX = event.clientX - boundings.left;
    var mouseMoveY = event.clientY - boundings.top;

    if(currentBall){
      currentBall.x = mouseMoveX;
      currentBall.y = mouseMoveY;

      drawBalls();
    }
  });

  canvas.addEventListener('mouseup', function(event) {
    console.log('mouseup');
    currentBall = null;    
  });

};


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRandomRGBColor() {
  var red = getRandomInt(0, 257);
  var green = getRandomInt(0, 257);
  var blue = getRandomInt(0, 257);
  return {r: red, g: green, b: blue};
};

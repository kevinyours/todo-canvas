


window.onload = function () {

  // Definitions
  var canvas = document.getElementById("animations-canvas");
  var context = canvas.getContext("2d");

  var start = new Date();


  window.requestAnimationFrame(drawRandomColoredRectangle);


  function drawRandomColoredRectangle(){

    var now = new Date();
    if(now - start >= 1000){
      start = now;

      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

       // Random Colors
       var color = createRandomRGBColor();
       var fillOpacity = Math.random();
       var fillColor = 'rgba('+ color.r + ', ' + color.g  + ', ' + color.b + ', ' + fillOpacity +')';
       var borderColor = 'rgba('+ color.r + ', ' + color.g  + ', ' + color.b + ')';

       var x = getRandomInt(0, canvas.width);
       var y = getRandomInt(0, canvas.height);
       var w = getRandomInt(0, canvas.width - x);
       var h = getRandomInt(0, canvas.height - y);

       // Draw Rectangle
       context.beginPath();
       context.fillStyle = fillColor;
       context.strokeStyle = borderColor;
       context.rect(x, y, w, h);
       context.stroke();
       context.fill();
     }

     // Animate
     window.requestAnimationFrame(drawRandomColoredRectangle);
  }




/**
  *
  * // Random Colors
  * var color = createRandomRGBColor();
  * var fillOpacity = Math.random();
  * var fillColor = 'rgba('+ color.r + ', ' + color.g  + ', ' + color.b + ', ' + fillOpacity +')';
  * var borderColor = 'rgba('+ color.r + ', ' + color.g  + ', ' + color.b + ')';
  *
  *
*/

  function createRandomRGBColor() {
    var red = getRandomInt(0, 257);
    var green = getRandomInt(0, 257);
    var blue = getRandomInt(0, 257);
    return {r: red, g: green, b: blue};
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
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

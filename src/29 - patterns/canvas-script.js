


window.onload = function () {

  // Definitions
  var canvas = document.getElementById("patterns-canvas");
  var context = canvas.getContext("2d");

  // context.createPattern(image, repetition);
  // repetition:
  // - repeat: both directions
  // - repeat-x: horizontal only
  // - repeat-y: vertical only
  // - no-repeat: neither

  var patternImage = new Image();
  patternImage.src = 'apple.png';


  patternImage.onload = function () {
    var pattern = context.createPattern(patternImage, 'no-repeat');
    context.fillStyle = pattern;
    context.fillRect(0, 0, 900, 450);
  };



};

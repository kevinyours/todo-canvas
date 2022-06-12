window.onload = function () {
  // Definitions
  var canvas = document.getElementById("key-events-canvas");
  var context = canvas.getContext("2d");

  // Key Events
  // - keydown
  // - keypress
  // - keyup

  // Keyboard Definitions
  var KEY_CODE = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };

  window.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case KEY_CODE.LEFT:
        break;

      case KEY_CODE.UP:
        break;

      case KEY_CODE.RIGHT:
        break;

      case KEY_CODE.DOWN:
        break;

      default:
        break;
    }
  });
};

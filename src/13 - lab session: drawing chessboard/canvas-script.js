




window.onload = function () {

  // Definitions
  var canvas = document.getElementById("chessboard-canvas");
  var context = canvas.getContext("2d");

  // Colors
  var lightCellColor = "#ddb180";
  var darkCellColor = "#7c330c";

  // Frame
  context.strokeStyle = "black";
  context.strokeRect(250, 100, 400, 400);

  for(var x = 1; x <= 8; x++){
    for(var y = 1; y <= 8; y++){

      if((x + y) % 2 == 0){
        context.fillStyle = darkCellColor;
      }else{
        context.fillStyle = lightCellColor;
      }

      context.fillRect(200 + x * 50, 50 + y * 50, 50, 50);
    }
  }


  /*

  // First Row
  for(var i = 1; i <= 8; i++){

    if( i % 2 == 0){
      context.fillStyle = darkCellColor;
    }else{
      context.fillStyle = lightCellColor;
    }

    context.fillRect(200 + i * 50, 100, 50, 50);
  }


  // Second Row
  for(var i = 1; i <= 8; i++){

    if( i % 2 == 0){
      context.fillStyle = lightCellColor;
    }else{
      context.fillStyle = darkCellColor;
    }

    context.fillRect(200 + i * 50, 150, 50, 50);
  }


  // Third Row
  for(var i = 1; i <= 8; i++){

    if( i % 2 == 0){
      context.fillStyle = darkCellColor;
    }else{
      context.fillStyle = lightCellColor;
    }

    context.fillRect(200 + i * 50, 200, 50, 50);
  }


*/

  /*

  // Cell 1
  context.fillStyle = lightCellColor;
  context.fillRect(250, 100, 50, 50);

  // Cell 2
  context.fillStyle = darkCellColor;
  context.fillRect(300, 100, 50, 50);

  // Cell 3
  context.fillStyle = lightCellColor;
  context.fillRect(350, 100, 50, 50);

  // Cell 4
  context.fillStyle = darkCellColor;
  context.fillRect(400, 100, 50, 50);

  */


}

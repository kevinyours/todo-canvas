


window.onload = function () {

  // Definitions
  var canvas = document.getElementById("save-canvas");
  var context = canvas.getContext("2d");

  // drawImage(img, dx, dy)
  // drawImage(img, dx, dy, dw, dh)
  // drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)


  var amsterdamImage = new Image();
  amsterdamImage.src = "amsterdam.jpg";

  amsterdamImage.onload = function () {
    context.drawImage(amsterdamImage, 180, 35);
    // Image Data Functions
    // - createImageData() Creates a new, blank ImageData object
    // - getImageData() Returns an ImageData object that copies the pixel data for the specified rectangle on a canvas
    // - putImageData() Puts the image data (from a specified ImageData object) back onto the canvas

    var imageData = context.getImageData(180, 35, 550, 366);

    // R - The color red (from 0-255)
    // G - The color green (from 0-255)
    // B - The color blue (from 0-255)
    // A - The alpha channel (from 0-255; 0 is transparent and 255 is fully visible)

    for(var i = 0; i < imageData.data.length; i+=4){

        var average = ( imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3;
        imageData.data[i] = average;       // Red
        imageData.data[i+1] = average;     // Green
        imageData.data[i+2] = average;     // Blue
        //imageData.data[i+3] = 50;   // Alpha
    }
    context.putImageData(imageData, 180, 35);


    // Save canvas image as data url ( default: PNG)
    var dataURL = canvas.toDataURL();

    document.getElementById('canvasImg').src = dataURL;


  };

};

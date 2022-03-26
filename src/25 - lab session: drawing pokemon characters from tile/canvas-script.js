


window.onload = function () {

  // Definitions
  var canvas = document.getElementById("pokemon-canvas");
  var context = canvas.getContext("2d");

  // drawImage(img, dx, dy)
  // drawImage(img, dx, dy, dw, dh)
  // drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

  var pokemonTile = new Image();
  pokemonTile.src = 'pokemons.png';


  pokemonTile.onload = function () {

    // Pikachu
    context.drawImage(pokemonTile, 0, 0, 200, 200, 0, 0, 200, 200);

    // Squirtile
    context.drawImage(pokemonTile, 400, 180, 200, 200, 200, 0, 200, 200);

    // Bulbasaur
    context.drawImage(pokemonTile, 1000, 0, 200, 200, 400, 0, 200, 200);

  };



}

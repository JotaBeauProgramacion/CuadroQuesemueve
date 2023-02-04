const miImagen = document.getElementById("miImagen");

document.onkeydown = function(evento) {
  switch (evento.keyCode) {
    case 37: 
      miImagen.style.left = (miImagen.offsetLeft - 10) + "px";
      break;
    case 38:
      miImagen.style.top = (miImagen.offsetTop - 10) + "px";
      break;
    case 39: 
      miImagen.style.left = (miImagen.offsetLeft + 10) + "px";
      break;
    case 40: 
      miImagen.style.top = (miImagen.offsetTop + 10) + "px";
      break;
  }
}



function displayDate() {
    document.getElementById("demo").innerHTML = Date();

  }

function changeColor() {
    document.getElementById("boton").style.color = "white";
    document.getElementById("boton").style.backgroundColor = "black";
    document.getElementById("boton").style.fontSize = "25px";

}
  
function crearParrafo() {
    document.getElementById("parrafo").innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, repellendus? Eum iure beatae numquam dicta ullam ipsum quidem illum, quo deleniti eveniet, perspiciatis at repudiandae dolorem id quibusdam quisquam accusantium Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, repellendus? Eum iure beatae numquam dicta ullam ipsum quidem illum, quo deleniti eveniet, perspiciatis at repudiandae dolorem id quibusdam quisquam accusantium";
}

function quitarParrafo() {
    document.getElementById("parrafo").innerHTML = "";
}

function cambiaImg() {
    document.getElementById("flecha").src = "../img/flecha_arriba.png";
    document.getElementById("flecha").style.width = "250px"
}

function cambiaImg2() {
    document.getElementById("flecha").src = "../img/flecha_abajo.png";
    document.getElementById("flecha").style.width = "200px"

}
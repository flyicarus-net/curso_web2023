function funcArg(nombre, trabajo) {
  document.getElementById("demo").innerHTML =
    "Aquí tenemos a " + nombre + ", es " + trabajo + ".";
}



function funcArg1(nombre, trabajo) {
  nombre = document.getElementsByName("nombre")[0].value;
  trabajo = document.getElementsByName("trabajo")[0].value;

  document.getElementById("demo1").innerHTML =
    "Aquí tenemos a " + nombre + ", es " + trabajo + ".";
}



function limpiar() {
  document.getElementById("demo1").innerHTML = "";
  document.getElementsByName("nombre")[0].value = "";
  document.getElementsByName("trabajo")[0].value = "";
}

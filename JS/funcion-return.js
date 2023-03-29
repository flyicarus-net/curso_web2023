//Declarar
var x, y, s, r;

//las funciones de flecha deben estar declaradas antes de las llamadas:
const multiplicar = (a, b) => (a * b);
const dividir = (a, b) => (a / b);
const sumar = (a, b) => (a + b);
const restar = (a, b) => (a - b);


x = multiplicar(4,3);
y = dividir(8,4);
s = sumar(5,5);
r = restar(9,6);


document.getElementById("mult").innerHTML = "El resultado de multiplicar 4 * 3 es: " + x;
document.getElementById("divid").innerHTML = "El resultado de dividir 8 / 4 es: " + y;
document.getElementById("sum").innerHTML = "El resultado de sumar 5 + 5 es: " + s;
document.getElementById("rest").innerHTML = "El resultado de restar 9 - 6 es: " + r;

// function multiplicar(a, b) {

//     return a * b;
// };


// function dividir(a, b) {

//     return a / b;
// };

// function sumar(a, b) {

//     return a + b;
// };

// function restar(a, b) {

//     return a - b;
// };


//FUNCION ANONIMA ASIGNADA A UNA VARIABLE
const add = function (a,b) {
    console.log(a + b)
};

add(2,7);
// MUESTRA POR CONSOLA 9


//FUNCION DE FLECHA
const funcionFlecha = (altura) => {
    return (5 * altura /2);
}

//FUNCION DE FLECHA SIMPLIFICADA
const funcion5 = (altura) => (5* altura /2);


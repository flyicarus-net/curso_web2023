var x, y;
x=7;//x le asigno el valor numérico 7
y=4;
document.getElementById("result1").innerHTML = "7 + 4 = "+ (x+y);
document.getElementById("result2").innerHTML = "7 - 4 = " + (x-y);
document.getElementById("result3").innerHTML = "7 * 4 = " + (x*y);
document.getElementById("result4").innerHTML = "7 / 4 = "+ (x/y);
document.getElementById("result5").innerHTML = "7 % 4 = "+ (x%y);
document.write("<p>El valor de x es: " + x + "</p>");
document.write("<p>El valor de x es: " + x++ + "</p>");
document.write("<p>El valor de x es: " + ++x + "</p>");

// Operadores de comparación

document.getElementById("resultA").innerHTML = "X == Y = "+ (x == y);
document.getElementById("resultB").innerHTML = "X === Y = "+ (x == y);
document.getElementById("resultC").innerHTML = "X != Y = "+ (x != y);
document.getElementById("resultD").innerHTML = "X !== Y = "+ (x !== y);

